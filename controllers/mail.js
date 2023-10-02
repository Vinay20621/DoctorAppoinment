const nodemailer = require("nodemailer");



  
 var transporter = nodemailer.createTransport({
    service:'gmail',
    
    auth: {
        user: 'krahul20587@gmail.com',
        pass: 'Rahul28021'
    }
});
 
var mailOption={
    from: 'krahul20587@gmail.com',
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

