import React, {useState} from 'react'
import './Chat.css'
import {Avatar, IconButton } from '@mui/material';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import axios from '../axios';


const Chat = ({messages}) => {

  const [input, setInput] = useState('');
  // console.log('chat = ', messages)
  const sendMessage = async(e) => {
    e.preventDefault();

    await axios.post(
      "/api/message/new",
      //body
      {
        message: input,
        name: "JUST_DEMO",
        timestamp: new Date().getTime,
        received: true,
      }
    );

    setInput('');
  }

  return (
    <div className="chat">
      <div className="chat__header">
      <Avatar src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2b28077-02b5-4e0f-8303-37e2672ea874/d5a1hdb-d15d5151-5a7b-4407-9eaa-99aa77863802.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UyYjI4MDc3LTAyYjUtNGUwZi04MzAzLTM3ZTI2NzJlYTg3NFwvZDVhMWhkYi1kMTVkNTE1MS01YTdiLTQ0MDctOWVhYS05OWFhNzc4NjM4MDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ITLY1myWdL4iAy1wu4qYRLCGPOEbVs4rxrlXt5uR3zg" />
        <div className="chat__headerInfo">
          <h3>John Doe</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map(message =>  (
            <p className={`chat__message ${message.received && "chat__receiver"}`}>
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
        
      </div>

      <div className="chat__footer">
        <EmojiEmotionsOutlinedIcon />
        <form>
          <input
             value={input}
             onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button 
           onClick={sendMessage} 
            type="submit">
            Send Message
          </button>
        </form>
        <MicNoneOutlinedIcon/>
      </div>
    </div>
  );
}

export default Chat