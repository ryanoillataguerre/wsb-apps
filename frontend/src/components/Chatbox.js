import React from 'react';

function ChatComment(props){
  return(
    <button className="chat-comment" onClick={function(){alert(props.user)}} >
      {props.text}
    </button>
  );
}

class Chatbox extends React.Component{
  
  renderComment(){
    return(
      <ChatComment
        user="Snoo"
        text="Lorem ipsum dolor sit amet"
      />
    )
  }

  render(){
    return (
      <div className="chatbox-container">
        {this.renderComment()}
        <div className="chat-comment">Lorem ipsulor sit amet</div>
        <div className="chat-comment">Lorem ipsm dolot amet</div>
        <div className="chat-comment">Lorem ipsum dolor sit amet</div>
        <div className="chat-comment">Lorem ipsum dolor siet</div>
        <div className="chat-comment">Lorem ipsum dolor sit amet</div>
        <div className="chat-comment">"Lorem ipsum dolor sit amet asdfasdaserasdf"</div>
      </div>
    )
  }
}
/*
const Chatbox = () => {
  return (
    <div className="chatbox-container">
      <div className="chat-comment">Lorem ipsum dolor sit amet</div>
      <div className="chat-comment">Lorem ipsulor sit amet</div>
      <div className="chat-comment">Lorem ipsm dolot amet</div>
      <div className="chat-comment">Lorem ipsum dolor sit amet</div>
      <div className="chat-comment">Lorem ipsum dolor siet</div>
      <div className="chat-comment">Lorem ipsum dolor sit amet</div>
      <div className="chat-comment">"Lorem ipsum dolor sit amet asdfasdaserasdf"</div>
    </div>
  )
}
*/
export default Chatbox;
