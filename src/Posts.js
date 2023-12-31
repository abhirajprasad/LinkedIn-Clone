import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import CachedIcon from '@mui/icons-material/Cached';
import SendIcon from '@mui/icons-material/Send';

function Posts({name, description, message, photoUrl }) {
  return (
    <div className='post'>
        <div className="post_header">
            <Avatar />
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post_body">
            <p>{message}</p>
            {/* <div className="photo">
                photoUrl
            </div> */}
        </div>
        
        

        <div className="post_bottons">
            <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
            <InputOption Icon={CommentIcon} title="Comment" color="gray" />
            <InputOption Icon={CachedIcon} title="Repost" color="gray" />
            <InputOption Icon={SendIcon} title="Send" color="gray" />

        </div>

    </div>
  )
}

export default Posts