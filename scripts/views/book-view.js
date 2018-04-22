'use strict';

var app = app || {};

(function(module) {
  const bookView = {};
  bookView.initIndexPage = function() {
    $('.container').hide();
    $('#book-view').show();
    $('#book-list').empty();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  }
  bookView.initDetailedPage = function() {
    $('.container').hide();
    $('#book-view').hide();
    $('#book-description').empty();
    module.Book.one.map(book => $('#book-description').append(book.toDetailedHtml()));
    $('#detailed-view').show();
  }
  bookView.initNewPage = function(){
    //console.log('test');
    $('.container').hide();
    $('#book-view').hide();
    $('#create-view').show();
    //$('#create-form').on('change', 'input, textarea', bookView.create);
    $('#create-form').on('submit', bookView.submit);
  }
  // bookView.create = function(){
  //   $('#book-list').empty();
  //   let book = new module.Book({
  //     title: $('#book-title').val(),
  //     author: $('#book-author').val(),
  //     image_url: $('#book-image_url').val(),
  //     isbn: $('#book-isbn').val(),
  //     description: $('#text-area-book-description').val()
  //   })
  //   $('#book-list').append(book.toHtml());
  // }
  bookView.submit = function(event) {
    $('#book-list').empty();
    event.preventDefault();
    let book = new module.Book({
      title: $('#book-title').val(),
      author: $('#book-author').val(),
      image_url: $('#book-image_url').val(),
      isbn: $('#book-isbn').val(),
      description: $('#text-area-book-description').val()
    })
    book.insert();
    $('#book-list').append(book.toHtml());
    //window.location = '../';
    page('/');
  }
  module.bookView = bookView;
})(app)

// $(function() {
//   app.Book.fetchAll(app.bookView.initIndexPage);
// //   $('#selectedBook').click(function(){
// //     console.log('test');
// //     //e.preventDefault();
// //     app.Book.fetchOne(app.bookView.initDetailedPage);
// //   });
// })
