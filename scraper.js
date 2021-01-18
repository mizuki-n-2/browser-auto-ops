const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

//TODO 現時点だとログイン画面なのでブラウザ自動操作により自動ログインしたい
async function handleScraper() {
  const res = await fetch('https://oh-o2.meiji.ac.jp/portal/oh-o_meiji/classweb');
  const html = await res.text();
  console.log(html);
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const data = document.querySelectorAll('dd > a');
  console.log(data[0].textContent);
  const info_list = Array.from(data).map(item => item.textContent);
  console.log(info_list);
}

handleScraper();