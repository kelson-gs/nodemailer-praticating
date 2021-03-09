const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// configuração de processamento e leitura http por json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 25,
    secure: false,
    auth: {
        user: 'coloque seu email',
        pass: 'sua senha'
    },
    tls: {
        rejectUnauthorized: false
    }
    
});

app.post('/mail', (req, res) => {

    const { nome, telefone, email, message } = req.body;

    
    transporter.sendMail({
        from: `"${nome}" <${email}> `,
        to: `<coloque o email que irá receber as mensagens >`,
        subject: 'Test mail',
        text: `${message}`,
        html: `<b>${message}</b>`
    }, (error, response) => {
        error ? console.log(error) : console.log(response);
    });
    

});


app.listen(3000, () => {
    console.log('Servidor rodando na porta: localhost:3000');
});
