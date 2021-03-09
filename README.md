# telegram-bot-vercel-demo

A telegram bot demo running on Vercel

1. Create a bot from [BotFather](https://core.telegram.org/bots#3-how-do-i-create-a-bot).

2. Deploy this repo to Vercel.

    [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fqianhum%2Ftelegram-bot-vercel-demo)

    > Domain name will be generated after successful deployment, so there is no way to input `BOT_DOMAIN` during deploying

3. Add `BOT_TOKEN` and `BOT_DOMAIN` environment variables in Vercel project setting. `BOT_DOMAIN` must include "https://".

4. Click `Promote to Production` to trigger deployment

5. Run

    ```zsh
    curl -F "url=https://[YOUR-DOMAIN-NAME]/api/echo-bot" https://api.telegram.org/bot[YOUR-BOT-TOKEN]/setWebhook`
    ```

6. Have fun
