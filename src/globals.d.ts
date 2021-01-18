
type IQuote = {
    id: number,
    language_code: string,
    content: string,
    url: string,
    originator: {
        id: number,
        name: string,
        url: string
    },
    tags: Array<string>
}

