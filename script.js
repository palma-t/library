function Book(title, author, pages, readingStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readingStatus = readingStatus;
    this.info = function() {
        return this.title + "by " + this.author + ", " + pages + " pages, " + this.readingStatus
    }
}