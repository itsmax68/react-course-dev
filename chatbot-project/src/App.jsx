import { ChatInput } from './components/ChatInput'
import { useState } from 'react'
import './App.css'
import ChatMessages from './components/ChatMessages'


function App() {

  const [chatMessages , setChatMessages] = useState([
  {
      message: 'hello chatbot',
      sender: 'user',
      id: 'id1'
  },
  {
      message: 'Hello! How can I help you?',
      sender: 'robot',
      id: 'id2'
  },
  {
      message: 'can you get me todays date?',
      sender: 'user',
      id: 'id3'
  },
  {
      message: 'Today is June 11',
      sender: 'robot',
      id: 'id4'
  }
]);

// const [chatMessages , setChatMessages] =array; above is one more shortcut of array destructring 
// const chatMessages = array[0]; above is shortcut known as array destructuring and state.
// const setChatMessages = array[1];

  return(
      <div className="app-container">
          
          <ChatMessages
              chatMessages={chatMessages}
          />
          <ChatInput 
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
          />
      </div>
  );
 }

export default App
