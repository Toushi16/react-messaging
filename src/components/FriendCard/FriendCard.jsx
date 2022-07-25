import './index.css';

const FriendCard = ({proPic}) => {
    return (
        <div className='FriendCard'>
            <img className='FriendCard__img' src={ proPic.photo } alt=""/>
            <p className='FriendCard__name'>{ proPic.name }</p>
        </div>
    )
}

export default FriendCard;