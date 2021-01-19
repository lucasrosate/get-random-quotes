
export const createAuthorInfoTableQuery = `
CREATE TABLE IF NOT EXISTS author_info (
    id INT(10) NOT NULL AUTO_INCREMENT,
    author VARCHAR(255) NOT NULL,
    url_author VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
    );
`

export const createQuoteTextTableQuery = `
CREATE TABLE IF NOT EXISTS quote_info (
    id INT(10) NOT NULL AUTO_INCREMENT,
    author_id INT(16) NOT NULL,
    content VARCHAR(1200) NOT NULL,
    url VARCHAR(255) NOT NULL,
    language_code CHAR(3),
    PRIMARY KEY(id),
    FOREIGN KEY(author_id) REFERENCES author_info(id)
    );
`

export const createTagsTableQuery = `
CREATE TABLE IF NOT EXISTS tags (
    id INT(10) NOT NULL AUTO_INCREMENT,
    author_id INT(16) NOT NULL,
    tag CHAR(16),
    PRIMARY KEY(id),
    FOREIGN KEY(author_id) REFERENCES author_info(id)
    );
`