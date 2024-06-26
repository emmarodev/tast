const mongoose = require('mongoose')

const coonectdb = () => {
    let base = "mongodb+srv://emmanueleneyoh:rguKd8CtjXtX3dZF@clusterhybrid.r8nsfxx.mongodb.net/tast?retryWrites=true&w=majority&appName=Clusterhybrid"
 
  
    mongoose.set('strictQuery', false);
    mongoose.connect(base)
      .then(() => console.log('Database connected !'))
      .catch((err) => console.log(err));
  };

module.exports = {
    coonectdb
}