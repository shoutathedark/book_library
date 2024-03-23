const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){
        console.log(this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read);
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read;
    }
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    console.log(newBook);
    myLibrary.push(newBook);
}

function createCard(title, author, pages) {
    const card = document.createElement("div");
    card.classList.add("card");

    const card_title = document.createElement("h2");
    card_title.textContent = title;
    card.appendChild(card_title)

    const card_author = document.createElement("p");
    card_author.textContent = "Author: " + author;
    card.appendChild(card_author)

    const card_pages = document.createElement("p");
    card_pages.textContent = "Pages: " + pages;
    card.appendChild(card_pages);

    /*card.innerHTML = `
      <h2>${title}</h2>
      <p>Author: ${author}</p>
      <p>Pages: ${pages}</p>
    `; */
    return card;
}

function appendCards(container, booksArray) {
    booksArray.forEach(book => {
      const card = createCard(book.title, book.author, book.pages);
      container.appendChild(card);
    });
  }

function openForm(){
    document.getElementById('sidebarform').style.width = '300px';
    document.getElementById('main').style.marginRight = '300px';
}

function closeForm(){
    document.getElementById('sidebarform').style.width = '0px';
    document.getElementById('main').style.marginRight = '0px';
    document.getElementById('titleinput').value = "";
    document.getElementById('authorinput').value = "";
    document.getElementById('pagesinput').value = 0;
}

function clickSubmitBook(){
    const author = document.getElementById('titleinput').value;
    const title = document.getElementById('authorinput').value;
    const pages = document.getElementById('pagesinput').value
    const read = document.querySelector('input[name="read"]:checked').value

    addBookToLibrary(title, author, pages, read); //add to the array

    const container = document.getElementById("cardContainer");
    const card = createCard(title, author, pages);
    container.appendChild(card);

    closeForm();

}

const container = document.getElementById("cardContainer");

addBookToLibrary('The Hobbit', 'JRR Tolkein', '295', 'not read yet');
addBookToLibrary('Star Wars', 'George Lucas', '400', 'read');
addBookToLibrary('Dune', 'Unknown', '839', 'not read yet');

appendCards(container, myLibrary);