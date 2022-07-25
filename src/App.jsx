import FriendList from './components/FriendList';
import AddMessage from './components/AddMessage';
import MessageCardList from './components/MessageCardList'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__friends">
        <FriendList />
      </div>
      <div className="App__messages">
        <AddMessage />
        <MessageCardList/>
      </div>
    </div>
  );
}

export default App;
