import { useState, useEffect } from 'react';
import { GET, POST, DELETE } from '../../utils/api.js';
import FriendCard from '../FriendCard';
import './index.css';


const FriendList = () => {
    const [friendList, setFriendList] = useState([]);

    useEffect(() => {
        GET('friends')
        .then(data => setFriendList(data));
    }, [])

    return (
        <div className='FriendList'>
            {
                friendList.length
                    ? friendList.map(friend => <FriendCard proPic={ friend } key={ friend.id } />)
                    : <p>Loading...</p>
            }
        </div>
    )
}

export default FriendList;