class AvengerQuote {
    constructor({ id, author, quote, photo, publishDate, comments }) {
        this.id = id;
        this.photo = photo;
        this.publishDate = publishDate;
        this.comments = comments;
        this.author = author;
        this.quote = quote;

    }
}

module.exports = {AvengerQuote};