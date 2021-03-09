const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// configuração de processamento e leitura http por josn
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'email de uso',
        clientId: '371715178999-65u7p0rk3n85km6o3nl4vjcu99c52hjo.apps.googleusercontent.com',
        clientSecret: 'YAQaUJXYTYIk0vJ6qqldjanf',
        refreshToken: '1//042pQbwLTx6KhCgYIARAAGAQSNwF-L9Ir9_uRlJjKbtLJDJWDG3NKagHolDnjagRGgQrdNfdrr_JtLR9_BQ6CPLlJycnYLbkskgY',
        accessToken: 'ya29.a0AfH6SMCxpQMSwa40UBMeImeWrt8n2JKm_ZQz9wcPIjcL6zI6WLW51vcjZIpMv6hjQi61N4OR1t2MzL04VpRqx7jSGzUuxFL7GRtPPauutf8Cbm5HmFiz1I11rKh9lF5HVGHl70RMgkQpfYA8KwPSnQNSHFxhovQv_qI',
    },
    tls: {
        rejectUnauthorized: false
    }
});

app.post('/mail', (req, res) => {

    const { nome, telefone, email, message } = req.body;

    console.log(elemento.nome);
    console.log(elemento.telefone);
    console.log(elemento.email);
    console.log(elemento.message);

    
    transporter.sendMail({
        from: '"kelson" <email de uso>',
        to: `<${email}>`,
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
