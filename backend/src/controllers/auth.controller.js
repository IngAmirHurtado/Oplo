import { createToken } from "../lib/createToken.js";
import User from "../models/user.model.js";

import bcrypts from "bcryptjs";

export const signup = async (req, res) => {
  const { email, name, password } = req.body;

  if(!email || !name || !password) return res.status(400).json({ message: "Por favor, rellena todos los campos" });

  if (password.length < 6)
    return res
      .status(400)
      .json({ message: "La contraseña debe tener al menos 6 caracteres" });

  const emailExist = await User.findOne({ email });
  if (emailExist)
    return res.status(400).json({ message: "Este email está en uso" });

  const hashPassword = await bcrypts.hash(password, 10);

  const user = {
    email,
    name,
    password: hashPassword,
  };

  const newUser = new User(user);
  await newUser.save();

  const token = await createToken({ id: newUser._id });

  res.cookie("token", token, {
    httpOnly: true, // Solo accesible desde el servidor, no desde JavaScript del navegador.
    sameSite: "strict", // Protege contra ataques CSRF.
    secure: process.env.NODE_ENV === "production" // Solo enviar cookies seguras en producción.
});

  return res.status(200).json({ 
    id: newUser._id,
    email: newUser.email,
    name: newUser.name,
    profilePic: newUser.profilePic,
    created: newUser.createdAt,
    submited: newUser.updatedAt
   });
};

export const login = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(!user) return res.status(400).json({message: "Email o contraseña incorrectos"});

    const matchPassword = await bcrypts.compare(password, user.password);

    if(!matchPassword) return res.status(400).json({message: "Email o contraseña incorrectos"});

    const token = await createToken({id: user._id});

    res.cookie("token", token, {
        httpOnly: true, // Solo accesible desde el servidor, no desde JavaScript del navegador.
        sameSite: "strict", // Protege contra ataques CSRF.
        secure: process.env.NODE_ENV === "production" // Solo enviar cookies seguras en producción.
    });

    return res.status(200).json({
        id: user._id,
        email: user.email,
        name: user.name,
        profilePic: user.profilePic,
        created: user.createdAt,
        submited: user.updatedAt
    });
};

export const logout = async (req, res) => {
    res.clearCookie("token");

    return res.status(200).json({message: "Hasta pronto"});
};
