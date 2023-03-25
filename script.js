let toDo = document.getElementById('todo');
let addBtn = document.getElementById('add');
let clearBtn = document.getElementById('clear');
let containerDiv = document.getElementById('container');

addBtn.onclick = () => {
    let display = document.createElement('p')
    display.classList.add('stringText')
    let checkString = document.createElement("button");
    checkString.classList.add('checkString')
    checkString.innerHTML = '&#10004'

    if (toDo.value) {
    display.innerHTML = `${toDo.value}`
    display.appendChild(checkString)
    containerDiv.appendChild(display)
    containerDiv.appendChild(checkString)
} 
    checkString.onclick = () => {
        display.style.textDecoration = 'line-through'
        display.style.backgroundColor = 'gray'
    }
    display.onclick = () => {
        display.style.textDecoration = 'none'
        display.style.backgroundColor = '#dadada'
    }
    toDo.value = ''

}

clearBtn.onclick = () => {
    containerDiv.innerHTML = ''
}
