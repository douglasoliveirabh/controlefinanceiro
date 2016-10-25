'use strict'

module.exports = {
    db: 'mongodb://douglas:isabelle@ds057816.mlab.com:57816/controle-financeiro',
    port: 3000,
    debug: true,
    logging: {
        format: 'tiny'
    },
    emailFrom: 'SENDER EMAIL ADDRESS', // sender address like ABC <abc@example.com>
    mailer: {
        service: 'SERVICE_PROVIDER', // Gmail, SMTP
        auth: {
            user: 'EMAIL_ID',
            pass: 'PASSWORD'
        }
    },
    secret: '2388930a-8580-446f-bddd-770ee181e69c',
    jwt: {
        signin: {
            expiresIn: 1440 // expires in 24 hours
        }
    }
}