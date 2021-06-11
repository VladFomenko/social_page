const doc = document.body;
/*
console.log("update")
console.log(doc);
const child = doc.childNodes;
console.log(child);
console.log(doc.hasChildNodes());

for(let node of child) {
    console.log(node);
}
*/

/*
const previousSiblingNode = doc.previousSibling;
const nextSiblingNode = doc.nextSibling;
const parentNode = doc.parentNode;

console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);
 */

/*
const child = doc.childNodes;
console.log(child);
const children = doc.children;
console.log(children);



const eleOne = document.querySelectorAll('#just_Div');
console.log(eleOne)

*/
//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1.
// Получить в переменную элемент с атрибутом data-say-hi
// и прочитать значение этого атрибута
<div data-say-hi="yes">Привет!</div>
const element = document.body.children[0];
console.log(element.dataset.sayHi);
 */


/*
// Задача №2.
// Получить в переменную элемент с текстом Йончи
<ul>
	<li>Корчи</li>
	<li>Йончи</li>
</ul>
const tag = document.body.firstElementChild.nextElementSibling;
console.log(tag);
const tagTwo = tag.lastElementChild.textContent;
console.log(tagTwo);
 */

/*
// Задача №3.
// Получить в переменную коллекцию элементов с классом like
<div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div>

const likeAll = document.querySelectorAll('.like');
console.log(likeAll);
 */

/*
// Задача №4.
// Куда добавится <li>Текст</li> ?
*/


// JS
/*
const list = document.querySelectorAll('ul');
console.log(list);
list[0].insertAdjacentHTML('beforeend', '<li>Текст</li>');

 */

// HTML
/*
<ul>
	<li>Пункт №1</li>
	<li>Пункт №2</li>
</ul>
*/