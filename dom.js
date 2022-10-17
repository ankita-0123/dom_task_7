//parentElement//
var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'yellow';
console.log(itemList.parentElement.parentElement.parentElement);
//childNodes//
//console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[0].style.backgroundColor = 'gray';
itemList.children[0].textContent = 'hello';

//FirstChild//
console.log(itemList.firstChild);
//firstElementChild//
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';
//LastChild//
console.log(itemList.lastChild);
//lastElementChild//
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';
//nextSibling//
console.log(itemList.nextSibling);
//nextElementSibling//
console.log(itemList.nextElementSibling);
//previousSibling//
console.log(itemList.previousSibling);
//previousElementSibling//
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';
//createElement//
var newDiv = document.createElement('div');
//addclass//
newDiv.className = 'Hello';
//Add id//
newDiv.id = 'hello 1';
//Add attributes//
newDiv.setAttribute('title','Hello Div');
//create text node//
var newDivText = document.createTextNode('Hello world');
//Add text to div//
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '20px';
container.insertBefore(newDiv,h1);

var newLi = document.createElement('li');
newLi.className = 'Hello';
newLi.style.fontSize ='10px';
var newLiText = document.createTextNode('Hello world');
newLi.appendChild(newLiText);
var list_group_item = document.querySelector('item .list-group-item');
var li = document.querySelector('item li');
console.log(newLi);




