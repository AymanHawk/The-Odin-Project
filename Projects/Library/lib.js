const myLibrary = [
    {
        title: "Star Wars",
        author: "George Lucas",
        pages: 401,
        isRead: false
    }
];

$newButton = document.querySelector('.new')
$table = document.querySelector('.table')
$tbody = $table.querySelector('tbody')

$form = document.querySelector('.form')
$titleInput = $form.querySelector('#title')
$authorInput = $form.querySelector('#author')
$pagesInput = $form.querySelector('#pages')
$sumbitButton = $form.querySelector('#submit')
$returnButton = $form.querySelector('#return')

function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages 
    this.isRead = isRead
}

const addBookToLibrary = () => {
    let title = $titleInput.value;
    let author = $authorInput.value;
    let pages = $pagesInput.value;
    let isRead = getReadValue();
    let myBook = new Book(title, author, pages, false)
    myLibrary.push(myBook)
}

const getReadValue = () => {
    if($form.querySelector('input[name="read]:checked').value === 'yes') return true;
    else return false;
}

for(const i of myLibrary){
    console.log(myLibrary[i]);
}