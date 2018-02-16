const content = document.getElementById('content');
let request = new XMLHttpRequest();
function onLoad() {
  let response = request.responseText;
  let bookItems = JSON.parse(response);
  console.log(bookItems.length);
  for (let i = 0; i< bookItems.length; i++) {
    let item = bookItems[i];
    content.innerHTML += `<li data-title = ${item.title} data-author = ${item.author.name} data-info = ${item.info} data-price = ${item.price}> <img src = ${item.cover.small}> </li>`;
  }
}
request.open("GET", "https://neto-api.herokuapp.com/book/", true);
request.send();
request.addEventListener('load', onLoad);