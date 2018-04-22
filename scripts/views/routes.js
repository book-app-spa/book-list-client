'use strict';
if (window.location.protocol.startsWith('https:')) {
  page.base('/books');
}
// This is where we define the client-side routes
//routes for everything except valid routes
page('/*', (ctx,next) => {
  $('.container').hide()
  next();
})

page('/',(ctx) => app.Book.fetchAll(ctx).then(app.bookView.initIndexPage));
page('/books/new',app.bookView.initNewPage);
page('/books/:id',(ctx) => app.Book.fetchOne(ctx.params.id).then(app.bookView.initDetailedPage));
page.start();//page();