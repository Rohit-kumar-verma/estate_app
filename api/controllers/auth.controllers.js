import bcrypt from "bcrypt";
// import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register =async(req,res)=>{
    const {username, email, password}= req.body

    //Has the password
    try
    {    
    const hashedPassword=await bcrypt.hash(password,10)

    console.log(hashedPassword);

    const newUser= await prisma.user.create({
        data: {
            username,
            email,
            password:hashedPassword
        }
})

console.log(newUser);
res.status(201).json({message:"User created successfully"});
}
catch(err){
    console.log(err);
    res.status(500).json({message:"failed to create user"});
}
}

export const login =async (req,res)=>{
    const {username, password}=req.body

    try{
    // user exist or not
    const user =await prisma.user.findUnique({
        where:{username}
    })

    if(!user){
        return res.status(401).json({message:"invalid credentianls!"})
    }

    // password is valid
    const isPasswordValid=await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(401).json({message:"invalid credentianls!"})
    }

    const age= 1000*60*60*24*7;
    const token= jwt.sign({
        id:user.id,
        isAdmin:false
    }, process.env.JWT_SECRET_KEY, {expiresIn:age})

    const {password:userPassword, ...userInfo} =user
    res.cookie("token", token, {
        httpOnly:true,
        maxAge: age
    }).status(200).json(userInfo)
    console.log(req.cookies.token);
}
catch(err){
    console.log(err);
    res.status(500).json({message:"Failed to login!"})
}
}

export const logout =(req,res)=>{

    res.clearCookie("token").status(200).json({message:"log out succesfull"})

}
