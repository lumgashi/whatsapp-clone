import React, {useState} from 'react'
import './Sidebar.css'
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Avatar, IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';


const Sidebar = ({messages}) => {
 console.log('sidebar = ', messages)
  return (
    <div className='sidebar'>
      <div className="sidebar__header">
            <Avatar src="https://www.pngkey.com/png/detail/114-1149847_avatar-unknown-dp.png"/>
           <div className='sidebar__headerRight'>
            <IconButton>
                  <DonutLargeOutlinedIcon />
            </IconButton>
            <IconButton>
                  <ChatBubbleOutlineOutlinedIcon />
            </IconButton>
            <IconButton>
                  <MoreVertOutlinedIcon />
            </IconButton>
           </div>
      </div>
      <div className='sidebar__search'>
                  <div className='sidebar__searchContainer'>
                        <SearchOutlinedIcon />
                        <input type="text" />
                  </div>
      </div>

      <div className='sidebar__chats'>
            <SidebarChat messages={messages}  />
      </div>


     </div>
  )
}

export default Sidebar