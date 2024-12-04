import './chat.css'
import EmojiPicker from 'emoji-picker-react'
import { useEffect, useRef, useState } from 'react'
const Chat = () => {
    const [open,setOpen]=useState(false)
    const [text,SetText]= useState("")

    const endRef = useRef(null)

    useEffect(() => {
        endRef.current?.scrollIntoView({behavior:"smooth"})
    }, [])

    const handleEmoji = (e)=>{
        SetText((prev)=>prev+e.emoji)
        setOpen(false)
    }

  return (
    <div className='chat' >
        <div className="top">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                <span>Anukool Patel</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="icons">
                <img src="./phone.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./info.png" alt="" />
            </div>
        </div>
        <div className="center">
            <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <p>Hello I am here</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message own">
                <div className="texts">
                    <p>Hello I am here</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <p>Hello I am here</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message own">
                
                <div className="texts">
                    <p>Hello I am here</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <p>Hello I am here</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message own">
                <div className="texts">
                    <img src="./avatar.png" alt="" />
                    <p>Hello I am here</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div ref={endRef}></div>
        </div>
        <div className="bottom">
            <div className="icons">
            <img src="./img.png" alt="" />
                <img src="./camera.png" alt="" />
                <img src="./mic.png" alt="" />
            </div>
            <input type="text" 
            value={text} 
            placeholder='Type your Message...' 
            onChange={e=>SetText(e.target.value)}
            />
            <div className="emoji">
                <img src="./emoji.png" 
                alt="" 
                onClick={()=>setOpen((prev)=> !prev)}/>
                <div className="picker">
                <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                </div>
            </div>
            <button className='sendButton'>Send</button>
        </div>
    </div>
  )
}

export default Chat