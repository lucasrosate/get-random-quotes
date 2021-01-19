# get-random-quotes

This app allows to get quotes and its author with option to save (MySQL).

### Localrun
1. Clone this repo.
2. Create a ```.env``` with your MySQL server information:
```
SQL_USER
SQL_PASSWORD
SQL_DATABASE
SQL_SERVER
SQL_ENCRYPT
SQL_PORT
```
3. run ```npm run install``` to install packages.
4. run ```npm run create-table``` to create tables in your localhost.
5. run ```npm run dev```.


Delay between requests is setted as default with 1500ms, you can change by inserting ```DELAY_BETWEEN_REQUESTS=number``` in your ```.env``` file.