const mongoose = require("mongoose");

const connect = async () => {

  const URI = "mongodb+srv://user123:user123@cluster0.ihbgo.mongodb.net/wlchackathon?retryWrites=true&w=majority&appName=Cluster0";
  try {
    
    const done = await mongoose.connect(URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    if (done) {
      console.log("Db coneected succesfully");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
