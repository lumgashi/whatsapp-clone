import { useEffect,useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Pusher from 'pusher-js';
import axios from './axios'

function App() {

  const [messages, setMessages] = useState([]);

  //useEffect for fetching messages
  useEffect(()=>{
    axios.get('/api/message/sync').then(response=> {
      setMessages(response.data);
    }).catch(err => console.error(err))
  },[])
  
  
  //useEffect for triggering pusher events
  useEffect(() => {
    const pusher = new Pusher('86ff1850d6b1c974a011', {
      cluster: 'eu'
    });
    
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMsg) {
      //alert(JSON.stringify(newMsg));
      setMessages([...messages, newMsg])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
    
  }, [messages])
  
  console.log(messages);


  return (
    <div className="app">
      <div className='app__body'>
        <Sidebar messages={messages} />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
