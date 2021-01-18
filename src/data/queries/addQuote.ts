export const addAuthorQuoteQuery = (quote: IQuote) => `
    INSERT INTO author_info (author, url_author)
    SELECT '${quote.originator.name}', '${quote.originator.url}'
    WHERE NOT EXISTS 
        (SELECT author FROM author_info WHERE author='${quote.originator.name}');
`;

export const addQuoteTextQuery = (quote: IQuote) => `
    IF NOT EXISTS(SELECT * FROM quote_info WHERE content=${quote.content})
    INSERT INTO quote_info (author_id, content, url, language_code)
    VALUES (${quote.originator.name},${quote.content} , ${quote.url}, ${quote.language_code});
`;

export const addTagQuoteQuery = (quote: IQuote, index: number) => `
    IF NOT EXISTS(SELECT * FROM quote_info WHERE content=${quote.content})
    INSERT INTO tags (author_id, tag)
    VALUES (${quote.originator.name}, ${quote.tags[index]});
`;
