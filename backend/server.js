import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import dbMessagesRoutes from './routes/dbMessagesRoutes.js';
import Pusher from 'pusher'
import cors from 'cors'

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

// app.use((req,res,next) => {
//       res.setHeader("Access-Control-Allow-Origin", "*");
//       res.setHeader("Access-Control-Allow-Headers", "*");
//       next();
// })


//pusher config
const pusher = new Pusher({
  appId: process.env.PUSHER_appId,
  key: process.env.PUSHER_key,
  secret: process.env.PUSHER_server,
  cluster: process.env.PUSHER_cluster,
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});

const db = mongoose.connection;
db.once("open", ()=> {
      console.log("DB connected/open")

      const msgCollection = db.collection("messages");
      const changeStream = msgCollection.watch();

      changeStream.on('change',(change)=> {
            console.log(change)

            if(change.operationType === 'insert') {
                  const messageDetails = change.fullDocument;
                  pusher.trigger('messages', 'inserted',
                  {
                        name: messageDetails.name,
                        message: messageDetails.message, 
                        timestamp: messageDetails.timestamp,
                        received: messageDetails.received
                  })
            }else{
                  console.log('Error while triggering pusher')
            }
      }) 
})

const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGODB_URL).then(()=> {
      console.log(`connected to mongodb`)
}).catch((err)=> console.log(err));



app.use('/api/message', dbMessagesRoutes);

app.listen(PORT, ()=> {
      console.log(`server running on port ${PORT}`)
})