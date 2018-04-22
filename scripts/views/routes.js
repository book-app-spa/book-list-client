'use strict';
// client-side routes
// if (window.location.protocol.startsWith('https:')) {
//   page.base('/books');
// }
//routes for everything except valid routes
page('/*', (ctx,next) => {
  $('.container').hide()
  next();
})
//Main routes
page('/',(ctx) => app.Book.fetchAll(ctx).then(app.bookView.initIndexPage));
page('/books/new',app.bookView.initNewPage);
page('/books/:id',(ctx) => app.Book.fetchOne(ctx.params.id).then(app.bookView.initDetailedPage));
page.start();//page();