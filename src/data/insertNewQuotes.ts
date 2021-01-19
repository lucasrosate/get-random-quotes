import {
    addAuthorQuoteQuery,
    addQuoteTextQuery,
    addTagQuoteQuery
} from './queries/addQuote';

import con from './config/connection';
import { MysqlError } from 'mysql';


const insertNewQuote = (quotes: IQuote[]) => {
    con.connect(err => {
        if (err) {
            console.log("Connection error!");
            throw err;
        }

        quotes.map((quote, index) => {
            const stringOverwrite = /'/g;
            const placeholder = "!@#$"
            quote.content = quote.content.replace(stringOverwrite, placeholder);
            quote.originator.name = quote.originator.name.replace(stringOverwrite, placeholder);
            quote.originator.url = quote.originator.url.replace(stringOverwrite, placeholder);
            quote.url = quote.url.replace(stringOverwrite, placeholder);

            con.query(addAuthorQuoteQuery(quote), (err, results, field) => {
                if (err) throw err;
                return results;
            });

            con.query(addQuoteTextQuery(quote), (err, results, field) => {
                if (err) throw err;
                return results;
            });

            quote.tags.map((tag: string, indexTag: number) => {
                quote.tags[indexTag] = quote.tags[indexTag].replace(stringOverwrite, placeholder);
                console.log
                con.query(addTagQuoteQuery(quote, indexTag), (err, results, field) => {
                    if (err) throw err;
                    return results;
                });
            })
        });
        con.end();
    });

}





// const addQuoteText = con.query(addQuoteTextQuery(quote), (err, results, field) => {
//     if (err) return err;
//     return results;
// });

// var addTagQuote = [];

// for (let i = 0; i < quote.tags.length; i++) {
//     addTagQuote.push(
//         con.query(addTagQuoteQuery(quote, i), (err, results, field) => {
//             if (err) return err;
//             return results;
//         })
//     )
// }







export default insertNewQuote;


