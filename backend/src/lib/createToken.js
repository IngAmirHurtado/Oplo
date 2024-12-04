import jwt from 'jsonwebtoken';

export const createToken = (user) => {
    return new Promise((resolve, reject) => {
        jwt.sign(user, process.env.SECRET, {}, (err, token) => {
            if(err) reject(err);
            resolve(token);
        })
    })
}