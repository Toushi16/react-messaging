import { useState, useEffect } from 'react';
import { GET, POST, DELETE } from '../../utils/api.js';
import MessageCard from '../MessageCard';
import './index.css';

const MessageCardList = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    GET('messages')
    .then(data => setMessageList(data));
  }, [])

  const dateSort = (a, b) => a.date < b.date ? 1 : -1;

  return (
    <div className="MessageCardList">
      
      {
        messageList.length
          ? messageList.sort((a, b) => dateSort(a, b)).map(message => <MessageCard  textContent={ message } key={ message.id } DeleteMessageCard={() => {DELETE('messages/', message.id).then(() => window.location.reload())}} />)
          : <p>Loading...</p>
      }
    </div>
  )
}

export default MessageCardList;