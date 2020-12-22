# foxy-node-bot

## A discord bot that 

1. Greets or wishes a farewell to the new/leaving member
2. Manages guild roles 

## How to start the bot locally

In your chosen directory
```bash
git clone git@github.com:QTtrash/foxy-node-bot.git
cd foxy-node-bot
npm run start
```

Don't forget to:
* Add an .env file with a Discord.js TOKEN (code expects it too!)
* [Find your channels ID](https://guides.github.com/features/mastering-markdown/) paste it into the code
    * It probably should be in .env too, but... __*well, oh well*__

## I personally deployed bot on Heroku 

Hence the Procfile and simple worker. I did not need Heroku to make a webpage for the bot, because it is worker only app.

## What you need right now:
__*Before the app is dockerized*__

* Node
* npm / yarn
    * npm install / yarn
* Discord.js api token
    * .env file to store it (code expects a .env file in root dir too!)

## Future plans: 

* constantly upgrading it according to my and my little brother's needs.
    * Mainly to my little brother's needs.

## Contacts: 

Email: smouchsiadis@gmail.com <br>
LinkedIn: [Suren Mouchsiadis at LinkedIn](https://www.linkedin.com/in/surenmouchsiadis/) <br>
Twitter: [Suren Mouchsiadis at Twitter](https://twitter.com/QTTrash_) <br>