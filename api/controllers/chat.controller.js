import { json } from "express";
import prisma from "../lib/prisma.js";

export const getChats=async(req,res)=>{
    const tokenUserId= req.userId
    try {
        const chats=await prisma.chat.findMany({
            where:{
                userIDs:{
                    hasSome:[tokenUserId]
                }
            }
        })

        for (const chat of chats){
            const receiverId=chat.userIDs.find(id => id!==tokenUserId)

            const reciver= await prisma.user.findUnique({
                where:{
                    id:receiverId,
                },
                select:{
                    id:true,
                    username:true,
                    avatar:true,
                }
            })
            chat.reciver=reciver
        }
        res.status(200).json(chats)
    } catch (err) {
        res.status(500).json({message:"Failed to get chats"});
    }
}

export const getChat=async(req,res)=>{
    const tokenUserId=req.userId
    try {
        const chat=await prisma.chat.findUnique({
            where:{
                userIDs:{
                    hasSome:[tokenUserId],
                }
            },
            include:{
                messages:{
                    orderBy:{
                        createdAt:"asc",
                    }
                }
            }
        })

        await prisma.chat.update({
            where:{
                id:req.params.id
            },
            data:{
                seenBy:{
                    set:[tokenUserId]
                }
            }
        })
        res.status(200),json(chat)
    } catch (err) {
        res.status(500).json({message:"Failed to get chat!"});
    }
}
export const addChat=async(req,res)=>{
    const tokenUserId=req.userId;
    try {
        const newChat=await prisma.chat.create({
            data:{
                userIDs:[tokenUserId, req.body.receiverId],
            },
        })
        res.status(200).json(newChat)
        
    } catch (err) {
        res.status(500).json({message:"Failed to add chat!"});
    }
}
export const readChat=async(req,res)=>{
    const tokenUserId=req.userId;
    try {
        const chat=await prisma.chat.update({
            where:{
                id: params.id,
                userIDs:{
                    hasSome:[tokenUserId]
                }
            },
            data:{
                seenBy:{
                    set:[tokenUserId]
                }
            }
        })
        res.status(200).json(chat)
        
    } catch (err) {
        res.status(500).json({message:"Failed to get chats"});
    }
}