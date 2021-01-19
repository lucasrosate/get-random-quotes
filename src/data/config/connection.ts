import mysql, { ConnectionConfig } from 'mysql';
import {
    SQL_USER,
    SQL_PASSWORD,
    SQL_DATABASE,
    SQL_SERVER,
    SQL_PORT
} from './config';

const con: mysql.Connection = mysql.createConnection({
    connectTimeout: 10,
    host: SQL_SERVER,
    user: SQL_USER,
    password: SQL_PASSWORD,
    database: SQL_DATABASE,
    port: 3306
});



export default con;