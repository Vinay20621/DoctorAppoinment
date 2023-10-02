const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//rest obejct
const app = express();

//middlewares
app.use(express.json());
app.use(moragan("dev"));


//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
//****************************************** */
const nodemailer = require("nodemailer");



  
 var transporter = nodemailer.createTransport({
    service:'gmail',
    
    auth: {
        user: 'krahul28021999@gmail.com',
        pass: 'Rahul28021'
    }
});
 
var mailOption={
    from: 'krahul28021999@gmail.com',
    to:'up63.vinay@gmail.com',
    subject:'hii',
    text:`my name is vinay singh`
};
transporter.sendMail(mailOption,function(error,info)
{
    if(error){
        console.log(error);
    }
    else{
        console.log('email sent: '+info.response)
    }


});
////////////////////////////////////

//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
