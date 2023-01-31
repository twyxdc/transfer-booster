import nitroType from './nitroType.js';
import wait from 'node:timers/promises';
import readline from 'readline-sync';
import 'colors';

export default async function transferBooster(client, id) {
    if (await nitroType(client) == "Sem nitro." || "Nitro Basic") {
        console.clear();
        console.log(`Voce nao pode utilizar esta funcao, somente para quem tem booster.`.red)

        await wait.setTimeout(2000)
        return process.exit();
    } else if (!client.guilds.cache.get(id)) {
        console.clear();
        console.log(`~ Servidor nao encontrado.`.red);
        
        await wait.setTimeout(2000)
        return process.exit();
    } else if ([id] !== await client.billing.fetchGuildBoosts().map(x => x.guildId)) {
        console.clear();
        console.log(c.red(' ~ Nenhum booster encontrado neste servidor.'));
       
        await wait.setTimeout(2000);
        return process.exit();
    } else {
        console.clear();
        let id2 = readline.question(` ~ Coloque o id do novo servidor: `);
        if (!client.guilds.cache.get(id2)) {
            console.clear();
            console.log(`~ Servidor nao encontrado.`.red);
            
            await wait.setTimeout(2000)
            return process.exit();
        }

        let atual =  await client.billing.fetchGuildBoosts();
        let primeiro = atual.first();
    
        await primeiro.subscribe(id2)
        .then(async () => {
            console.clear();
            console.log(`${client.guilds.cache.get(id2).name} Impulsionado!`.green);

            await wait.setTimeout(2000)
            return process.exit();
        })
        .catch(async (err) => {
            console.clear();
            console.log(`${err}`.red);

            await wait.setTimeout(2000)
            return process.exit();
        })
    }
}