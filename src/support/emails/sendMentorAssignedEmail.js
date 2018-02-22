var nodemailer = require('nodemailer')
var sparkPostTransport = require('nodemailer-sparkpost-transport')
var transporter = nodemailer.createTransport(sparkPostTransport())

// send mail with defined transport object
module.exports = function (studentEmail, teamEmail, mentorEmail) {
  var mailOptions = {
    from: `"Microsoft Hanna Bot " <${process.env.FROM_EMAIL}>`, // sender address
    to: studentEmail, // list of receivers
    cc: teamEmail,
    bcc: mentorEmail,
    subject: 'Your Question has been assigned a mentor', // Subject line
    text: 'You have been assigned a mentor', // plaintext body
    html: '<p>Greetings, Hacker! Good news! A Microsoft mentor has been assigned to your question through Hanna the Hackathon Bot.</p> <p> </p> <p>(Note: Unlike me, our mentors do require sleep. If they are not at the booth, they will see you bright and early in the morning and answer any questions then!)</p>' // html body
  }
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error)
      }
      resolve({result: 'success'})
    })
  })
}
