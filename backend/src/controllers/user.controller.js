import User from '../models/user.model.js';
import cloudinary from '../lib/cloudinary.js';

export const getUsersForSideBar = async (req, res) => {
    const loggedIdUser = req.user._id;
    const users = await User.find({_id: {$ne: loggedIdUser}}).select('-password');

    res.status(200).json(users);
}


export const updateProfilePic = async (req, res) => {
    const { profilePic } = req.body;
    const user = req.user;

    if(!profilePic) return res.status(400).json({ message: 'La imagen es requerida' });

    const uploadResponse = await cloudinary.uploader.upload(profilePic)
    const updateUser = await User.findByIdAndUpdate(user._id, {profilePic: uploadResponse.secure_url}, {new: true});

    res.status(200).json(updateUser);
}