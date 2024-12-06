import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.model.js";

export const getMessages = async (req, res) => {
  const { id: userToChatId } = req.params;
  const myId = req.user._id;

  const messages = await Message.find({
    $or: [
      { senderId: myId, receivedId: userToChatId },
      { senderId: userToChatId, receivedId: myId },
    ],
  });

  res.status(200).json(messages);
};

//REAL TIME
export const sendMessage = async(req, res) => {
    const { text, image}  = req.body
    const { id: receivedId} = req.params;
    const myId = req.user._id;

    let imageUrl;
    if (image) {
        const uploadResponse = await cloudinary.uploader.upload(image);
        imageUrl = uploadResponse.secure_url;
    }

    const allMessage = {
        senderId: myId,
        receivedId,
        text,
        image: imageUrl,
    };

    const newMessage = new Message(allMessage);
    await newMessage.save();

    res.status(201).json(newMessage);
} 
