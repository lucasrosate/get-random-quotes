import insertNewQuotes from '../data/insertNewQuotes';
import chalk from 'chalk';
import Quote from '../model/Quote';
import { fetchData } from '../api/route';

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const generateQuotes = async (quantity: number) => {
    if (quantity === 1) {
        console.log("Processing...")
        const response = await fetchData();
        const newQuote = new Quote(response.data);
        return newQuote;

    } else {
        let response;
        let newQuote: IQuote;
        let newQuotes: IQuote[] = [];

        for (let i = 0; i < quantity; i++) {
            console.log(`Processing quote ${i + 1}...`)
            response = await Promise.all([fetchData(), timeout(parseInt(process.env.DELAY_BETWEEN_REQUESTS!) || 1500)])
            newQuote = new Quote(response[0].data);
            newQuotes.push(newQuote);

        }
        return newQuotes;
    }
}


export const saveQuotes = (quotes: IQuote[] | IQuote) => {
    var newQuotes: IQuote[] = [];

    if (!Array.isArray(quotes)) {
        newQuotes.push(quotes as IQuote);

    } else {
        newQuotes = quotes;
    }

    insertNewQuotes(newQuotes)
};


export const displayQuotes = (data: (IQuote[] | IQuote)) => {

    var displayArrMessage;
    var displayQuote: string = '';

    if (Array.isArray(data)) {
        displayArrMessage = data.map((quote, index) => `
${chalk.yellow.bgGray.bold(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Quote ${index + 1}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`)}
${chalk.bold(`Message:`)} ${quote.content}
${chalk.bold(`Author:`)} ${quote.originator.name}
${chalk.bold(`Message url:`)} ${quote.url}
${chalk.bold(`Author url:`)} ${quote.originator.url}
${chalk.bold(`tags:`)}${quote.tags.map((tag, index) => ` ${tag}`)}.
`
        )
        displayQuote = displayArrMessage.join(' ');

    } else {
        const quote = data;

displayQuote = `
${chalk.yellow.bgGray.bold(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Quote\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`)}
${chalk.bold(`Message:`)} ${quote.content}
${chalk.bold(`Author:`)} ${quote.originator.name}
${chalk.bold(`Message url:`)} ${quote.url}
${chalk.bold(`Author url:`)} ${quote.originator.url}
${chalk.bold(`tags:`)}${quote.tags.map((tag, index) => ` ${tag}`)}.
`
    }

    return displayQuote;
}