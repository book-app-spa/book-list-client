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
    $('.container').hide();
    $('#book-view').hide();
    $('#create-view').show();
    $('#create-form').on('submit', bookView.submit);
  }
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