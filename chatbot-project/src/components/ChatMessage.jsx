import RobotProfile from '../assets/robot.png'
import UserProfile from '../assets/user.png'
import './ChatMessage.css'


export function ChatMessage({message , sender}){
    // const message = props.message; below is the shortcut for message and sender.
    // const sender = props.sender; below is the shortcut for message and sender.
    // const {message , sender} = props; this is a short cut for message and sender above , beside chatmessage.
  
  
    // shoetcut is below for if logic line:41
    // if (sender === 'robot') {
    //     return(
    //         <div>
    //             <img src="robot.png" width="50"/>
    //             {message}
    //         </div>
    //     );
    // }
  
    return (
        <div className={sender === 'user'? 'chat-message-user' : 'chat-message-robot'}>
            {sender === 'robot' && (
                <img src={RobotProfile} className="chat-message-profile"/>
            )}
            <div className="chat-message-text">
                {message}
            </div>
            {sender === 'user' && (
                <img src={UserProfile} className="chat-message-profile"/>
  
            )}
        </div>
    );
   }
