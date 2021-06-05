let inputTodo = document.getElementById('todo-form');
let listUl = document.getElementById('list');
function createLi(st) {
    let liItem = document.createElement('list');
    let text = document.createTextNode(st);
    let btn  = document.createElement('button');
    btnEdit = document.createElement('button');
    btnEdit.setAttribute('onclick','edit(this)');
    btnEdit.appendChild(document.createTextNode('Edit'));
    let delImg = document.createElement('img');
    delImg.setAttribute('src','delete.png');
    btn.setAttribute('onclick', 'del(this)')
    btn.appendChild(delImg);
    liItem.appendChild(text);
    liItem.appendChild(btn);
    liItem.appendChild(btnEdit);
    liItem.setAttribute('class','.list');
    return liItem;
}
function addItem() {
    let str = inputTodo.value;
    console.log(str);
    if (str.length !== 0) {
        listUl.appendChild(createLi(str));
    }
}
function delItem()
{
    listUl.innerHTML = '';
    inputTodo.value = '';
}
function del(e) {
    console.log(e.parentNode.remove());
    inputTodo.value = '';
}
function edit(e) {
    e.parentNode.innerHTML = prompt("Enter edited") + `<button onclick = "del(this)"><img src = "./delete.png"></button><button onclick="edit(this)">Edit</button>`
}