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

  const sendMessage = async(e) => {
    e.preventDefault();

    await axios.post(
      "/api/message/new",
      //body
      {
        message: input,
        name: "JUST_DEMO",
        timestamp: new Date().getTime,
        received: false,
      }
    );

    setInput('');
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://www.pngkey.com/png/detail/114-1149847_avatar-unknown-dp.png" />
        <div className="chat__headerInfo">
          <h3>User name</h3>
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