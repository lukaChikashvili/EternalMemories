const { User } = require('../models/UserModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISRTER USERS
const registerUsers = async (req, res) => {
     const { name, surname, email, password } = req.body;

     const hashedPassword = await bcrypt.hash(password, 10);
     const newUser  = new User({name, surname, email, password: hashedPassword}); 

     try {
        await newUser.save();
        res.status(200).json({message: 'user registered'});
     } catch (error) {
        console.log(error);
     }
  
}

// LOGIN USERS
const loginUsers = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({email});

  if(!user) {
    return res.status(404).json({message: "user not found"});

  }

  const validPassword = await bcrypt.compare(password, user.password);

  if(!validPassword) {
    res.status(404).json({message: "invalid password"});

  }

  const token = jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: '30d'});


   res.status(200).json({message: 'successful log in', token, email});
   
}

module.exports = {
   registerUsers,
   loginUsers
}