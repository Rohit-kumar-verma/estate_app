import prisma from "../lib/prisma.js";
import jwt  from "jsonwebtoken";

export const getPosts= async (req,res)=>{
    const query =req.query
    try {
        const posts=prisma.post.findMany({
            where:{
                city:query.city || undefined,
                type:query.type || undefined,
                property:query.property || undefined,
                bedroom:parseInt(query.bedroom) || undefined,
                price: {
                    gte: parseInt(query.minPrice) ||0,
                    lte: parseInt(query.maxPrice) ||100000000,
                }
            }
        })
        res.status(200).json(posts)
        
    } catch (err) {
        res.status(500).json({message:"Failed to get posts"})
    }
}

export const getPost= async (req,res)=>{
    const id=req.params
    try {
        const post=prisma.post.findUnique({
            where:id,
            include:{
                select:{
                    username:true,
                    avatar:true
                }
            }
        })
        let userId;
        const token=req.cookies?.token
        if(!token){
            userId:null
        }
        else{
            jwt.verify(token, process.env.JWT_SECRET_KEY, async(err, payload)=>{
                if(!err){
                    const saved= await prisma.savedPost.findUnique({
                        where:{
                            userId_postId:{
                                postId:id,
                                userId:payload.id,
                            }
                        }
                    })
                }
            })
        }
        res.status(200).json({...post, isSaved:saved ?true:false})
    } catch (err) {
        res.status(500).json({message:"Failed to get post"})
    }
}
export const addPost= async (req,res)=>{
    const body=res.body
    const tokenUSerId = req.userId
    try {
        const newPost=prisma.post.create({
            data:{
                ...body.postData,
                userId:tokenUSerId,
                postDetail:{
                    create:body.postDetail
                }
            }
        })
        res.status(200).json(newPost)
    } catch (err) {
        res.status(500).json({message:"Post Created"})
    }
}
export const updatePost= async (req,res)=>{
    try {
        
    } catch (err) {
        
    }
}
export const deletePost= async (req,res)=>{
    const id=req.params.id
    const tokenUSerId =req.userId

    try {
        const post=req.post.findUnique({
            where:id
        })

        if(post.id !== tokenUSerId){
            return res.status(403).json({message:"Not Authorized"})
        }
        await prisma.post.delete({
            where:{id},
        })
        res.status(200).json({message:"Post deleted"})
    } catch (err) {
        res.status(500).json({message:"Post Deletion failied"})
    }
}