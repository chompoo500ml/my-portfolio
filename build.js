var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var sass        = require('metalsmith-sass');
var assets      = require('metalsmith-assets');

var metalsmith = Metalsmith(__dirname)
  .metadata({
    title: "chompoo's portfolio",
    description: "chompoo's portfolio",
    keywords: "chompoo",
    author: "https://github.com/chompoo500ml",
    generator: "metalsmith",
    url: "https://github.com/chompoo500ml"
  })
  .source('src')
  .destination('public')
  .clean(true)
  .use(assets({
    source: 'assets',
    destination: '.'
  }))
  .use(sass({
    outputStyle: "expanded",
    outputDir: "css"
  }))
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    directory: 'layouts',
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
    console.log('Done!');
  });


