const { Telegraf, Markup } = require('telegraf');

if (process.env.BOT_TOKEN === undefined) {
  throw new TypeError('BOT_TOKEN must be provided!');
}

const keyboard = Markup.inlineKeyboard([
  Markup.button.url('❤️', 'http://telegraf.js.org'),
  Markup.button.callback('Delete', 'delete'),
]);

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Hello'));
bot.help((ctx) => ctx.reply('Help message'));
bot.action('delete', (ctx) => ctx.deleteMessage());
bot.command('photo', (ctx) => ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' }));
bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.message.chat.id, ctx.message, keyboard));
bot.launch({
  webhook: {
    domain: process.env.BOT_DOMAIN,
    hookPath: '/api/echo-bot',
  },
});

// Enable graceful stop

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
