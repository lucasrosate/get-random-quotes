import {
    addAuthorQuoteQuery,
    addQuoteTextQuery,
    addTagQuoteQuery
} from './queries/addQuote';

import connection from './config/connection';


const insertNewQuote = (quotes: IQuote[]) => {
    connection.connect(err => console.log(err));


    quotes.map((quote, index) => {
        const addAuthorQuote =
            connection.query(addAuthorQuoteQuery(quote), (err, results, field) => {
                if (err) return err;

                return results;
            });

        const addQuoteText =
            connection.query(addQuoteTextQuery(quote), (err, results, field) => {
                if (err) return err;

                return results;
            });

        const addTagQuote =
            connection.query(addTagQuoteQuery(quote, index), (err, results, field) => {
                if (err) return err;

                return results;
            });

            console.log(addAuthorQuote);
    });

    connection.end();
}





// const addQuoteText = connection.query(addQuoteTextQuery(quote), (err, results, field) => {
//     if (err) return err;
//     return results;
// });

// var addTagQuote = [];

// for (let i = 0; i < quote.tags.length; i++) {
//     addTagQuote.push(
//         connection.query(addTagQuoteQuery(quote, i), (err, results, field) => {
//             if (err) return err;
//             return results;
//         })
//     )
// }







export default insertNewQuote;


