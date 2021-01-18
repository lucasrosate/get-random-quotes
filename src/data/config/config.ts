const dotenv = require('dotenv');

dotenv.config();

export const {
    SQL_USER,
    SQL_PASSWORD,
    SQL_DATABASE,
    SQL_SERVER,
    SQL_ENCRYPT,
    SQL_PORT
} = process.env;
