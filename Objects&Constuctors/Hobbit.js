function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.info = function(){
        return (title + " by " + author + " , " + pages + " pages" + ", " + isRead)
    }
}

const StarWars = new Book("Star Wars", "George Lucas", 407, "is not read");
console.log(StarWars.info())