import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function Sidebar() {
    
    const recentItems = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );


  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src=" https://images.unsplash.com/photo-1604077350837-c7f82f28653f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
            <Avatar  className='sidebar_avatar'/>
            <h2>Abhiraj Prasad</h2>
            <h4>abhirajprasad007@gmail.com</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you </p>
                <p className="sidebar_stat_Number">2,332</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post </p>
                <p className="sidebar_stat_Number">3,372</p>
            </div>
            <div className="sidebar_stat_last">
                <BookmarkIcon className='sidebar_stat_last1'/>
                <p>My items</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItems('reactjs')}
            {recentItems('programming')}
            {recentItems('softwareEngineering')}
            {recentItems('design')}
            {recentItems('developer')}
            {recentItems('blockchain')}
        </div>

    </div>
  )
}

export default Sidebar