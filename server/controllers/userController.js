const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createtoken = (_id) => {
    try {
        // Create and sign the JWT
        const token = jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
        return token;
      } catch (error) {
        // Handle any errors that occur during token creation
        console.error('Error creating JWT:', error);
        return null; // You may choose to return null or throw an error here
      }
}

const login_post = async (req, res) => {
    
    const {email, password} = req.body
    
    try {
        const user = await User.login(email, password)
        const username = user.username

        // Creating token
        const token = createtoken(user._id)
        
        res.status(200).json({ username, email, token })

    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

const signup_post = async (req, res) => {
    
    const {username, email, password} = req.body
    try {
        const user = await User.signup(username, email, password)

        // Creating token
        const token = createtoken(user._id)
        
        res.status(200).json({ username, email, token })

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    login_post,
    signup_post
}