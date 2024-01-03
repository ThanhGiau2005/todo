var todoList = []
var index = 0
function addTodo() {
    index++
    let task = {
        id: index,
        value: document.getElementById('myInput').value
    }
    todoList.push(task)
    renderUL()
}

function renderUL(){
    var todoDom = document.getElementById('myUL')
    todoDom.innerHTML = ''
    var html = ''
    for (let i = 0; i < todoList.length; i++) {
        let task = todoList[i]
        html += '<li>' + task.value + `<button onClick="renderEdit(${task.id})" class="edit">edit</button><button onclick="deleteTask(${task.id})" class="close">delete</button></li>`
    }
    todoDom.innerHTML = html
}
function deleteTask(id){
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == id) {
            todoList.splice(i,1)
        }
    }
    renderUL()
}

function renderEdit(id){
    var todoDom = document.getElementById('myUL')
    todoDom.innerHTML = ''
    var html = ''
    for (let i = 0; i < todoList.length; i++) {
        let task = todoList[i]
        if (id == task.id) {
            html += '<li>' + `<input id="editInput" value="${task.value}">` + `<button onClick="submitEdit(${task.id}, document.getElementById('editInput').value)" class="edit">submit</button><button onclick="deleteTask(${task.id})" class="close">delete</button></li>`
        } else {
            html += '<li>' + task.value + `<button onClick="renderEdit(${task.id})" class="edit">edit</button><button onclick="deleteTask(${task.id})" class="close">delete</button></li>`
        }
    }
    todoDom.innerHTML = html
}

function submitEdit(id, content){
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == id) {
            todoList[i].value = content
        }
    }
    renderUL()
}


