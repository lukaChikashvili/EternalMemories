const { User } = require('../models/UserModels');
const bcrypt = require('bcryptjs');


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


module.exports = {
   registerUsers
}