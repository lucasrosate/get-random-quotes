import {
    createAuthorInfoTableQuery,
    createQuoteTextTableQuery,
    createTagsTableQuery
} from './queries/initializeTables';

import connection from './config/connection';

const createTables = () => {
    connection.connect();

    connection.query(createAuthorInfoTableQuery, (err) => {
        if (err) return err;
    });

    connection.query(createQuoteTextTableQuery, (err) => {
        if (err) return err;
    });

    connection.query(createTagsTableQuery, (err) => {
        if (err) return err;
    });

    connection.end();
    return;



}

createTables();

