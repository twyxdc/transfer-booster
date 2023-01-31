import Discord from 'discord.js-selfbot-v13';
import wait from 'node:timers/promises';
import Redirect from './redirect.js';

export default async function tokenValidator(token) {
    if (token == []) {
        console.clear();
        console.log(`Token vazia, saindo.`.red);

        await wait.setTimeout(2000);
        return process.exit();
    } else {
        var client = new Discord.Client({ checkUpdate: false });
        await client.login(token)
        .then(async () => {
            console.clear();
            console.log(`Aguarde, validando token..`.yellow);

            await wait.setTimeout(3000);
            console.clear();
            console.log(`Token validada e logada, redirecionando..`.green);
        
            await wait.setTimeout(2000);
            return Redirect(client);
        })
        .catch(async (err) => {
            console.clear();
            console.log(`Aguarde, validando token..`.yellow);

            await wait.setTimeout(3000);
            console.clear();
            console.log(`Token invalida, saindo..`.red);

            await wait.setTimeout(2000);
            return process.exit();
        });
    }
}