import Header from './components/Header';
import Chatbox from './components/Chatbox';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="chats-container">
        <Chatbox />
        <Chatbox />
        <Chatbox />
        <Chatbox />
      </div>
    </div>
  );
}

export default App;
