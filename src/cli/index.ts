import clear from 'clear';
import chalk from 'chalk';
import inquirer from 'inquirer';

import { generateQuotes, saveQuotes, displayQuotes } from '../controller/QuoteController';




const options = [
    "Generate and display a random quote.",
    "Generate, display and save in db a random quote.",
    "Generate and save in db a random quote."
]
clear();

console.log(
    chalk.blue.bgBlack.bold(
        " \tRandom Quotes Generator v1.0.0\t \n\n\n"
    )
)

var prompt = inquirer.createPromptModule();

prompt([{
    type: "list",
    name: "Options",
    message: "Please select which option you want to do.\n",
    choices: [...options, "Exit."]
}])

    .then((answerOptionsGenerator) => {
        console.log("\n");
        if (answerOptionsGenerator['Options'] === "Exit.") return;
        prompt([{
            type: "number",
            name: "NumberQuotes",
            message: "How much quotes do you want to generate.\n",
        }])
            .then(async (answerHowMuch) => {
                let numberHowMuch = answerHowMuch['NumberQuotes'];

                let generatedQuotes = await generateQuotes(numberHowMuch);

                switch (answerOptionsGenerator['Options']) {
                    case options[0]:
                        console.log(displayQuotes(generatedQuotes));
                        break;

                    case options[1]:
                        console.log(displayQuotes(generatedQuotes));
                        saveQuotes(generatedQuotes as IQuote[])
                        break;

                    case options[2]:
                        saveQuotes(generatedQuotes as IQuote[])
                        break;

                }
            })
    })



