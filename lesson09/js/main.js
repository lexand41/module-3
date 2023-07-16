// Задание #1-1
const arr = ['module.jsx', 'index.html', 'style.css',
  'index.js', 'file.ts', 'library.css', 'my.plugin.js'];
const regexp1 = /\S+jsx/; 
const regexp2 = /\S+js/; 
const regexp3 = /\S+ts/; 
const newArr = [];

arr.forEach(el => {
  const foo = el.match(regexp1) || el.match(regexp2) || el.match(regexp3);
  if (foo !== null) newArr.push(foo[0]);
});
console.log('Задание #1-1', newArr);


// Задание #1-2
const emails = ['info@methed.ru', 'max24@mail.com', 'java_script@google.io',
  'my-mail@yandex.ru', 'tom_yam@ya.ru', 'zero@mai1.xyz'];
const validEmails = [];
const regexp = /^(\w+)@([a-z]{3,})\.([a-z]{2,5})/;

emails.forEach(el => {
  const foo = el.match(regexp);
  if (foo !== null) validEmails.push(foo[0]);
});
console.log('Задание #1-2',validEmails);


// Задание #1-3
const str = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.'; 
const regexp03 = /\([а-я]+(.*?)\)/g;

const textBrackets = str.match(regexp03);

console.log('Задание #1-3',textBrackets);



// Задание #1-4
const strWithDomains = 'Lorem ipsum dolor sit amet consectetur http://foo.com.ru adipisicing elit. Aspernatur ducimus, ratione excepturi nihil http://foo.ru eius animi culpa mollitia, inventore  odit amet voluptatum sed id quidem eos ea non. Ab, fugiat vel.Здоровый (праздничный) ужин http://site.ru вовсе не обязательно должен https://site.com состоять из шпината'

const insertUrlToLink = str => {
  const regexp04 = /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g;
  const regexp05 = /[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const domains = str.match(regexp04);

  domains.forEach(el => {
    const teg_a = el.replace(el, `<a href="${el}">${el.match(regexp05)}</a>`);
    console.log(teg_a);
  });
};
console.log('Задание #1-4');
insertUrlToLink(strWithDomains);
