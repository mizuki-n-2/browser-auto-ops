const Nightmare = require('nightmare');

// 明治大学ホームページ自動ログイン
async function nightmare() {
  await Nightmare({ show: true })
    .goto('https://oh-o2.meiji.ac.jp/portal/index')
    .click('.login > dt > a')
    .type('input[name="ACCOUNTUID"]', 'ここに学籍番号')
    .type('input[name="PASSWORD"]', 'ここにパスワード')
    .click('input[name="SUBMIT"]');
};
nightmare();