import Message from '../model/dbMessages.js'

export const getMessage = async(req,res,next)=> {
      res.send('ok');
}

export const postMessage = async(req,res,next)=> {
      const newMessage = new Message({...req.body});

      try {
            const savedMessage = await newMessage.save();
            res.status(201).json(savedMessage);
      } catch (error) {
            res.status(500).json(error);
      }
}



export const syncMessage = async(req,res,next)=> {
      Message.find((err,data)=> {
            if(err) res.status(500).send(err);
            else  res.status(200).send(data);
      })
}




