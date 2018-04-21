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
