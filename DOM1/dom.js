//examine the Document Object
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);

// console.log(document.head);
// console.log(document.body);

//using selectors
//GETELEMENTBYID
// console.log(document.getElementById('header-title'));

//const headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello, and Welcome';

// headerTitle.innerHTML = '<h3>Hello World</h3>';

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// // items[1].style.backgroundColor = 'yellow';

// for(let i=0; i <= items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }


//GETELEMENTBYTAGNAME
// const li = document.getElementsByTagName('li');
// console.log(li);

//query Selector
//used only for one item
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 19px red';

// let input = document.querySelector('input');
// input.value = 'hello world';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';


//query selector all
// const titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent = 'How are you?';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

//traversing the DOM
const itemList = document.querySelector('#items');
// parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

//childNode
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
// console.log(itemList.firstChild);

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//lastChild
// console.log(itemList.lastChild);

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 3';

//nextSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousElementSibling);

//createElement

//create a new div
const newDiv = document.createElement('div');

//new class
newDiv.className = 'Hello';

//new id
newDiv.id = 'hello1';

//add attr
newDiv.setAttribute('title', 'Hello Div');

//create text node
const newDivText = document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivText);

const container = document.querySelector('header .container');
let h1 = document.querySelector('header h1')

console.log(newDiv);

container.insertBefore(newDiv, h1);