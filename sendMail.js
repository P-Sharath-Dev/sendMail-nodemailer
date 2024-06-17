
// Import the necessary modules here
const nodemailer = require('nodemailer');
const readline = require('readline');


// Write your code here
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question('please enter your email ',(userEmail)=>{

const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user: "codingninjas2k16@gmail.com",
        pass: "slwvvlczduktvhdj",
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
    try {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: 'temp@gmil.com', // sender address
            to: userEmail, // list of receivers
            subject: "testing", // Subject line
            text: "hello, testing nodemiller", // plain text body
            html: "hello, testing nodemiller", // html body
        });
        console.log('Success: Email sent to ',userEmail);

        } catch (error) {
            console.log('something went wrong !!!',error);
        }
    }
    sendMail();
    rl.close();
});
