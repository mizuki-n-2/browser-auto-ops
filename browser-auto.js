const Nightmare = require('nightmare');

// nightmare.jsの練習
// yahoo検索
async function nightmare() {
  await Nightmare({show: true})
    .goto('http://yahoo.co.jp')
    .type('._1wsoZ5fswvzAoNYvIJgrU4', 'nightmarejs')
    .click('._63Ie6douiF2dG_ihlFTen');
};
nightmare();