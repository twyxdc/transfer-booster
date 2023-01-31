import nitroType from './nitroType.js';
import transferBooster from './transferBooster.js';
import c from 'colors';
import readline from 'readline-sync';

export default async function Redirect(client) {
   process.title = `[AUTOTRANSFERIR BOOSTER] ${client.user.username}#${client.user.discriminator}`;
    
   console.clear();
   console.log(c.magenta(`
 Logado em : ${client.user.tag} - (${client.user.id})
 Nitro Type : ${await nitroType(client)}
 \n ${c.yellow(`[1] Tranferir Booster\n [2] Sair`)}
   `));

   switch (readline.question(` ~ Selecione uma opcao: `.cyan)) {
    case '1': {
        transferBooster(client, readline.question(` ~ Coloque o id do servidor: `.white));
    }
    break;

    case '2': {
        return process.exit();
    }
   }
}