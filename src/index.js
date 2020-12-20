const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const bot = new Discord.Client();
console.log("Bot is running!")

bot.on('message', (message) => {
    if(message.content === "$hey") {
        const reply = `Hey ${message.author}`

        return message.channel.send(reply);
    }

    if(message.content === "$test_add_user") {
        return bot.emit("guildMemberAdd", message.member);
    }

    if(message.content === "$test_leave_user") {
        return bot.emit("guildMemberRemove", message.member);
    }

})

bot.on('guildMemberAdd', member => {
    member.roles.add('788748984742313985')
    member.guild.channels.cache.get('788748147664879628').send(`${member} теперь сертифицированный любитель кошек, поздравьте и скажите привет!`);
});

bot.on('guildMemberRemove', member => {
    member.guild.channels.cache.get('788748147664879628').send(`${member} потерял сертификат любителей кошек, попрощайтесь!`);
});

bot.login(process.env.TOKEN);