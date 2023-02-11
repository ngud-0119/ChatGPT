 
## ⭐️ Why NGU.D?

Never Give Up Dream
Top JavaScript & Typescript Developer

## ✨ Features

- 🌈 Single API for all messaging providers (Email, SMS, Push, Chat)
- 💅 Easily manage notifications over multiple channels
- 🚀 Equipped with a CMS for advanced layouts and design management
- 🛡 Built-in protection for missing variables (Coming Soon)
- 📦 Easy to set up and integrate
- 🛡 Debug and analyze multi-channel messages in a single dashboard
- 📦 Embeddable notification center with real-time updates
- 👨‍💻 Community driven

## 📚 Table Of Contents

- [Getting Started](https://github.com/novuhq/novu#-getting-started)
- [Embeddable notification center](https://github.com/novuhq/novu#embeddable-notification-center)
- [Providers](https://github.com/novuhq/novu#providers)
  - [Email](https://github.com/novuhq/novu#-email)
  - [SMS](https://github.com/novuhq/novu#-sms)
  - [Push](https://github.com/novuhq/novu#-push)
  - [Chat](https://github.com/novuhq/novu#-chat)
  - [In-App](https://github.com/novuhq/novu#-in-app)
  - [Others](https://github.com/novuhq/novu#other-coming-soon)
- [Jarvis](https://github.com/novuhq/novu#-meet-jarvis)
- [Need Help?](https://github.com/novuhq/novu#-need-help)
- [Links](https://github.com/novuhq/novu#-links)
- [License](https://github.com/novuhq/novu#%EF%B8%8F-license)

## 🚀 Getting Started

We are excited to launch the complete Novu API and admin panel. Want to give it a test before the official release? Here is how:

```
npx novu init
```

After setting up your account using the cloud or docker version you can trigger the API using the `@novu/node` package.

```bash
npm install @novu/node
```

```ts
import { Novu } from '@novu/node';

const novu = new Novu(process.env.NOVU_API_KEY);

await novu.trigger('<TRIGGER_NAME>', {
  to: [
    {
      subscriberId: '<UNIQUE_IDENTIFIER>',
      email: 'john1@doemail.com',
      firstName: 'John',
      lastName: 'Doe',
    },
  ],
  payload: {
    name: 'Hello World',
    organization: {
      logo: 'https://happycorp.com/logo.png',
    },
  },
});
```

## Embeddable Notification Center

Using the Novu API and admin panel, you can easily add a real-time notification center to your web app without building it yourself. You can use our React component or an iframe embed if you are not using React.

<div align="center">
<img width="762" alt="notification-center-912bb96e009fb3a69bafec23bcde00b0" src="https://user-images.githubusercontent.com/80174214/193887395-f1c95042-b4e6-480e-a89c-a78aa247fa90.gif">

Read more about how to add a notification center to your app with the Novu API [here](https://docs.novu.co/notification-center/getting-started)

</div>

## Providers

Novu provides a single API to manage providers across multiple channels with a simple-to-use interface.

#### 💌 Email

- [x] [Sendgrid](https://github.com/novuhq/novu/tree/main/providers/sendgrid)
- [x] [Netcore](https://github.com/novuhq/novu/tree/main/providers/netcore)
- [x] [Mailgun](https://github.com/novuhq/novu/tree/main/providers/mailgun)
- [x] [SES](https://github.com/novuhq/novu/tree/main/providers/ses)
- [x] [Postmark](https://github.com/novuhq/novu/tree/main/providers/postmark)
- [x] [Custom SMTP](https://github.com/novuhq/novu/tree/main/providers/nodemailer)
- [x] [Mailjet](https://github.com/novuhq/novu/tree/main/providers/mailjet)
- [x] [Mandrill](https://github.com/novuhq/novu/tree/main/providers/mandrill)
- [x] [SendinBlue](https://github.com/novuhq/novu/tree/main/providers/sendinblue)
- [x] [EmailJS](https://github.com/novuhq/novu/tree/main/providers/emailjs)
- [x] [MailerSend](https://github.com/novuhq/novu/tree/main/providers/mailersend)
- [ ] SparkPost

#### 📞 SMS

- [x] [Twilio](https://github.com/novuhq/novu/tree/main/providers/twilio)
- [x] [Plivo](https://github.com/novuhq/novu/tree/main/providers/plivo)
- [x] [SNS](https://github.com/novuhq/novu/tree/main/providers/sns)
- [x] [Nexmo - Vonage](https://github.com/novuhq/novu/tree/main/providers/nexmo)
- [x] [Sms77](https://github.com/novuhq/novu/tree/main/providers/sms77)
- [x] [Telnyx](https://github.com/novuhq/novu/tree/main/providers/telnyx)
- [x] [Termii](https://github.com/novuhq/novu/tree/main/providers/termii)
- [x] [Gupshup](https://github.com/novuhq/novu/tree/main/providers/gupshup)
- [ ] Bandwidth
- [ ] RingCentral

#### 📱 Push

- [x] [FCM](https://github.com/novuhq/novu/tree/main/providers/fcm)
- [x] [Expo](https://github.com/novuhq/novu/tree/main/providers/expo)
- [x] [SNS](https://github.com/novuhq/novu/tree/main/providers/sns)
- [ ] Pushwoosh

#### 👇 Chat

- [x] Slack
- [x] Discord
- [x] MS Teams
- [ ] Mattermost

#### 📱 In-App

- [x] [Novu](https://docs.novu.co/notification-center/getting-started)
- [ ] MagicBell

#### Other (Coming Soon...)

- [ ] PagerDuty