git reset --hard && git clean -fd && git checkout master && git pull origin /*нужно было объяснить, что значит эти слова.*/


// С бекенда приходит массив такого вида:
var arr = [
  { name: 'width', value: 10 }, 
  { name: 'height', value: 20 },
  // ...
];

// Нужно получить объект такого вида:
/*
{
  width: 10,
  height: 20,
  ...
}
*/

function objFromArr(arr) {
    let i = 0;
    let obj = {}
    
    while (i < arr.length) {
        obj[arr[i].name] = arr[i].value
        i++;
    }
    
    return obj
}



var b = {};
var c;

b.b = 1;
c = b;
c.b = 2;

console.log('1)', b.b); // 2
console.log('2)', c.b); // 2

var a = { counter: 1 };
function inc(obj) {
    obj.counter++;
    obj.changed = true;
}

inc(a);
console.log('3)', a);   // { counter: 2, changed: true}

var d = 'test';
d.d = 1;
console.log('4)', d.d); // undefined


for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 10);
}


/**
 * Есть функция и объект. Необходимо, чтобы функция в консоли вывела значение 'yandex'.
 * Как добиться желаемого, не изменяя тело функции?
 */
function f() { console.log(this.x); }
var obj = {x: 'yandex'};
f.call(obj)
let f2 = f.bind(obj)
f.apply(obj)


function Book() {
    this.name = 'foo';
}

Book.prototype = {
    getName: function() {
        return this.name;
    }
}

var book = new Book();

Book.prototype.getUpperName = function() {
    return this.getName().toUpperCase();
}

console.log(book.getUpperName());


strjoin('.', 'a', 'b', 'c') //'a.b.c'
strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f') //'a-b-c-d-e-f'

function strjoin(...arr) {
    let sep = arr.shift()
    arr.join(sep)
    return arr
}


/**
 * Необходимо написать код, асинхронно получающий данные по заданному url
 * Для запроса можно использовать $.get или fetch
 * Если во время запроса произошла ошибка, то пробовать запросить ещё раз
 * Если в итоге информацию получить не удалось, вывести в консоль текст "Не удалось получить данные".
 */

const url = 'http://localhost/api/getData';

// Код
let prom = fetch(url)

prom.