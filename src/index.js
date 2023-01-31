import readline from 'readline-sync';
import tokenValidator from "./functions/tokenValidator.js";
import 'colors';

tokenValidator(readline.question('coloque sua token: '.cyan));