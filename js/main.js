const input = document.querySelector(".form-control");
console.log(input)
const btn = document.querySelector(".btn");
const listGroup = document.querySelector(".list-group");


//получение данных из localStorage и преоброзование обратно в js
const todo = JSON.parse(localStorage.getItem('todo'));

//если в переменной todo чтото есть, мы его храним в противном случае мы храним пустой массив
const todoList = todo ? todo : [];

//Ввешаем клик в переменнe. btn
btn.addEventListener("click", function(){
    //добовляем новый элемент в массив todolist
    todoList.push({
        value: input.value,
        checked:false
    })
//преобразуем в JSON
const stringTodo = JSON.stringify(todoList)

    console.log(todoList)
    console.log(stringTodo);
    localStorage.setItem('todo', stringTodo)
    //чтобы добовлалось новый элемент
   listGroup.insertAdjacentHTML("beforeend",`<li class="list-group-item list-group-item-${(todoList.length - 1) % 2 === 0 ? `warning` : `info`}">
   <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" т >
       <label class="form-check-label" for="flexCheckChecked">
       ${input.value}
       </label>
     </div>
 </li>`)

    input.value = "";
})
function drawlist(){
    //чтобы переберать массив
    for(let i = 0; i < todoList.length; i++){
        //чтобы добавлять элемент из инпута
    listGroup.insertAdjacentHTML("beforeend", `<li class="list-group-item list-group-item-${i % 2 === 0 ? `warning` :  `info`}">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" ${todoList[i].checked ? `checked`: ''} value="" id="flexCheckChecked">
        <label class="form-check-label ${todoList[i].checked ? 'checkedText' : ''}" for="flexCheckChecked ">
        ${todoList[i].value}
        </label>
      </div>
  </li>`)

    }
}
drawlist() 




//localStorage прочитать дома и JSON
//задание: при нажатие галочки(checkbox) текст перечеркивалась








