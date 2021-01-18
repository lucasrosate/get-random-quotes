class Quote implements IQuote {
    id: number;
    language_code: string;
    content: string;
    url: string;
    originator: {
        id: number;
        name: string;
        url: string
    };
    tags: Array<string>;


    constructor(quote: IQuote) {
        this.id = quote.id;
        this.content = quote.content;
        this.language_code = quote.language_code;
        this.url = quote.url;

        this.originator = {
            id: quote.originator.id,
            name: quote.originator.name,
            url: quote.originator.url
        };

        this.tags = quote.tags;

    }
}

export default Quote;