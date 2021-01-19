export const addAuthorQuoteQuery = (quote: IQuote) => `
    INSERT INTO author_info (author, url_author)
        SELECT '${quote.originator.name}', '${quote.originator.url}'
        WHERE NOT EXISTS (SELECT 1 FROM author_info WHERE author='${quote.originator.name}');
`;

export const addQuoteTextQuery = (quote: IQuote) => `
    INSERT INTO quote_info (author_id, content, url, language_code)
    SELECT (SELECT id FROM author_info WHERE author='${quote.originator.name}'), '${quote.content}' , '${quote.url}', '${quote.language_code}'
    WHERE NOT EXISTS (SELECT 1 FROM quote_info WHERE content='${quote.content}');
`;

export const addTagQuoteQuery = (quote: IQuote, indexTag: number) => `
    INSERT INTO tags (author_id, tag)
    SELECT (SELECT id FROM author_info WHERE author='${quote.originator.name}'), '${quote.tags[indexTag]}'
`;
