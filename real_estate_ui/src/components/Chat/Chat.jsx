import { useContext, useState } from 'react'
import  './chat.scss'
import { AuthContext } from '../../context/AuthContext'
import apiRequest from '../../lib/apiRequest'
import {format} from 'timeago.js'

const Chat = (chats) => {

    const [chat, setChat]= useState(null)
    const {currentUser}= useContext(AuthContext)

    const handleOpenChat= async (id, receiver)=>{
    try {
        const res=await apiRequest.get("/chats/"+id)
        setChat({...res.data, receiver})
    } catch (err) {
        console.log(err);
        
    }
    }

    const handleSubmit= async (e)=>{
        e.prevetDefault();
        const formData= new FormData(e.target)
        const text=formData.get("text")

        if(!text) return;

        try {
            const res= await apiRequest.post("/messages"+chat.id,{text})
            setChat(prev=>({...prev, messages:[...prev.messages, res.data]}));
            e.target.reset()
            
        } catch (err) {
            console.log(err);
        }
    }
  return ( 
    <div className='chat'>
        <div className="messages">
            <h1>Messages</h1>
            {
                chats.map((c)=>(
                <div className="message" key={c.id} style={{
                    backgroundColor: c.seenBy.includes(currentUser.id) ? "white":"#fecd514e"
                }}
                onClick={()=>handleOpenChat(c.id, c.receiver)}
                >
                    <img src={c.receiver.avatar|| "../../../src/assets/favicon.png"} alt=''/>
                    <span>{c.receiver.username}</span>
                    <p>
                        {c.lastmessage}
                    </p>
                </div>
                ))
            }
        </div>
        {chat!==null && 
        <div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src='../../../src/assets/favicon.png' alt=''/>
                    John doe
                </div>
                <span className='close' onClick={()=>setChat(null)}>X</span>
            </div>
            <div className="center">
                {
                    chat.messages.map((message)=>(
                        <div className="chatMessage"
                        style={{
                            alignSelf:message.userId === currentUser.id?"flex-end":"flex-start",
                            textAlign: message.userId=== currentUser.id?"right":"left"
                        }}
                        key={message.id}>
                        <p>{message.text}</p>
                        <span>{format(message.createdAt)}</span>
                </div>
                    ))
                }
            </div>
            <form onSubmit={handleSubmit} className="bottom">
                    <textarea name='text'></textarea>
                    <button>Send</button>
            </form>
        </div>
        }
    </div>
  )
}

export default Chat
