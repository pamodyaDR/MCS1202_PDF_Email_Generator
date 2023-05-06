const nodemailer = require('nodemailer');

let mailSender = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "mcs1202dehigam@gmail.com",
        pass: "ivopumgycsdxprhu"
    }
})

let content = {
    from : "mcs1202dehigam@gmail.com",
    to : "malminavindi98@gmail.com",
    subject : "Component based Software Development",
    text : "Component-based software development is a software engineering approach where applications are constructed by combining pre-built, reusable software components. These components are self-contained, modular units that encapsulate specific functionality. They can be developed independently, tested separately, and then seamlessly integrated into larger systems."
}

mailSender.sendMail(content, (err) => {
    if(err){
        console.log("error occured", err)
    }
    else{
        console.log("email sent successfully")
    }
})