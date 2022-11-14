import { Avatar } from "@mui/material";
import React, {useState, useEffect} from "react";
import "./SidebarChat.css";

const SidebarChat = ({messages}) => {

  const [messagesArray, setMessagesArray] = useState([]);

  useEffect(()=>{
    messages.map((message) => (
      setMessagesArray(message.message)
    ))

  },[messagesArray,messages])


  return (
    <div className="sidebarChat">
      <Avatar src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2b28077-02b5-4e0f-8303-37e2672ea874/d5a1hdb-d15d5151-5a7b-4407-9eaa-99aa77863802.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UyYjI4MDc3LTAyYjUtNGUwZi04MzAzLTM3ZTI2NzJlYTg3NFwvZDVhMWhkYi1kMTVkNTE1MS01YTdiLTQ0MDctOWVhYS05OWFhNzc4NjM4MDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ITLY1myWdL4iAy1wu4qYRLCGPOEbVs4rxrlXt5uR3zg" />
      <div className="sidebarChat__info">
        <h2>John Doe</h2>
        <p>{messagesArray}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
