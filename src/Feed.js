import React, { useEffect, useState } from 'react';
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption.js';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Posts from './Posts';
import { db } from "./firebase";
import { Timestamp} from '@firebase/firestore';


function Feed() {

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]); //hook

  useEffect(() => { //is a special hook which aloows us to fire a code when the feed component loads
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => 
      setPosts(
        snapshot.docs.map(doc => (
          {
            id: doc.id,
            data: doc.data(),
          }
        ))
      )  
    )
  }, [] );

  const sendPost = (e) => { //e stants for event
    e.preventDefault();   //prevents the search from refreshing it

    db.collection('posts').add({
      name: 'Abhiraj Prasad',
      description: 'this is test',
      message: input,
      photoUrl: '',
      timestamp: Timestamp.fromDate(new Date()),
    })

    setInput('');
  }


  return (
    <div className='feed'>
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>

        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title='Photo'  color="#70B5F9"  />
          <InputOption Icon={SubscriptionsIcon} title='Video'  color="#E7A33E"  />
          <InputOption Icon={EventIcon} title='Event'  color="#C0CBCD"  />
          <InputOption Icon={CalendarViewDayIcon} title='Write article'  color="#7FC15E"  />

        </div>
      </div>

      {/* Posts */}

      {posts.map(({id, data: { name, description, message, photoUrl }}) => (
        <Posts 
          key = { id }
          name = { name }
          description = { description }
          message = { message }
          photoUrl = { photoUrl }        
        />
      ))}  


    </div>
  )
}

export default Feed;