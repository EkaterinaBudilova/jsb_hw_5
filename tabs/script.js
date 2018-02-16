const tabs = document.querySelectorAll('nav a');
const content = document.getElementById('content');
const preloader = document.getElementById('preloader');
console.log(tabs);
let request = new XMLHttpRequest();
function onLoad() {
  content.innerHTML = request.responseText;
  preloader.classList.remove('hidden');
}
function onClick(event) {
  event.preventDefault();
  for (let tab of tabs) {
    tab.classList.remove('active');
  }
  this.classList.add('active');
  let path = this.href;
  console.log(path);
  request.open("GET", path, true);
  request.send();
  request.addEventListener("load", onLoad);
}
Array.from(tabs).forEach(tab => {
  tab.addEventListener('click', onClick)});
