var books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg'
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
    }
  ];

  /*int books
  for(int i=0; i<books.length; i++)
  {
      p (title, author)
  }*/

  const ul = document.querySelector('#list');
  let html = '';
  books.forEach(book => {
      if (book.alreadyRead == true) {
        html +=
        `
    <div class="bCover-wrapper" id="container"> 
      <img class="bookCovers" src="${book.cover}" id="image">
      <div class="alreadyRead">
        <h3>Book Read</h3>
        <p> You already read this book.</p>
      </div>
    </div>
    <li>
      Book Title: <span class="bTitle">${book.title}</span>, written by: <span class="bAuthor">${book.author}</span>
    </li>
    `;
  } else {
    html +=
  `
  <div class="bCover-wrapper"> 
    <img class="bookCovers" src="${book.cover}"> 
  </div>
  <li>
    Book Title: <span class="bTitle">${book.title}</span>, written by: <span class="bAuthor">${book.author}</span>
  </li>
  `;
  }
});
