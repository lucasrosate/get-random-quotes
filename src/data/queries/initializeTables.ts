
export const createAuthorInfoTableQuery = `
CREATE TABLE IF NOT EXISTS author_info (
    id INT(10) NOT NULL,
    author VARCHAR(255) NOT NULL,
    url_author VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
    );
`

export const createQuoteTextTableQuery = `
CREATE TABLE IF NOT EXISTS quote_info (
    id INT(10) NOT NULL,
    author_id INT(16) NOT NULL,
    content VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    language_code CHAR(3),
    PRIMARY KEY(id),
    FOREIGN KEY(author_id) REFERENCES author_info(id)
    );
`

export const createTagsTableQuery = `
CREATE TABLE IF NOT EXISTS tags (
    id INT(10) NOT NULL,
    author_id INT(16) NOT NULL,
    tag CHAR(16),
    PRIMARY KEY(id),
    FOREIGN KEY(author_id) REFERENCES author_info(id)
    );
`