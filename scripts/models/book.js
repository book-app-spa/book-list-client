'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://mr-booklist.herokuapp.com';
ENV.developmentApiUrl = 'http://localhost:5000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function(module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Book(rawBookObj) {
    Object.keys(rawBookObj).forEach(key => this[key] = rawBookObj[key]);
  }

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  }
  Book.prototype.toDetailedHtml = function() {
    let template = Handlebars.compile($('#book-detailedView-template').text());
    return template(this);
  }
  
  Book.all = [];
  Book.loadAll = rows => Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));
  Book.one = [];
  Book.fetchAll = callback =>
    $.getJSON(`${ENV.apiUrl}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  Book.fetchOne = (id) =>
    $.getJSON(`${ENV.apiUrl}/api/v1/books/${id}`)
      .then(results => Book.one = results.map(book => new Book(book)))
      .catch(errorCallback);

  module.Book = Book;
})(app)