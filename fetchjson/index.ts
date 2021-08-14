import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo

    const ID  = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    logTodo(ID, title, finished);
});

// 1

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    ID: ${id}
    Title: ${title}
    Is finished: ${completed}
    `);
}

const coordinates : {x: number, y: number} = JSON.parse('{"x":"5"}')
console.log(coordinates)

// 2

let words = ['red','green','blue']
let foundWord: boolean

for (let i = 0; i < words.length; i++){
    if (words[i] === 'green'){
        foundWord = true
        break
    }
}

// 3

let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 0){
        numberAboveZero = numbers[i]
        break
    }
}


