const todoObjectList = [];

class Todo_Class {
    constructor(item) {
        this.ulElement = item;
    }


    add() {
        const todoInput = document.querySelector("#myInput").value;

        if (todoInput == "") {
            alert("You did not enter any item!")
        }else {
            const todoObject = {
                id: todoObjectList.length,
                todoText: todoInput,
                isDone: false,
            }


            todoObjectList.unshift(todoObject);
            this.display();
            document.querySelector("#myInput").value = '';

        }

    }
    done(x) {
        const selectedTodoIndex = todoObjectList.findIndex((item) => item.id == x);
        // console.log(selectedTodoIndex);
        // console.log(todoObjectList[selectedTodoIndex].isDone);

        todoObjectList[selectedTodoIndex].isDone == false ? todoObjectList[selectedTodoIndex].isDone = true : todoObjectList[selectedTodoIndex].isDone = false;

        this.display();
    }
    delete(y) {
        const selectedDelIndex = todoObjectList.findIndex((item) => item.id == y);
        todoObjectList.splice(selectedDelIndex, 1);

        this.display();
    }


    display() {
        this.ulElement.innerHTML = "";

        todoObjectList.forEach((object_item) => {

            const liElement = document.createElement("li");
            const del_btn = document.createElement('i');

            liElement.setAttribute("data-id", object_item.id);
            liElement.innerText = object_item.todoText;

            del_btn.setAttribute("data-id", object_item.id);
            del_btn.classList.add("fas", "fa-trash");

            liElement.appendChild(del_btn);

            liElement.addEventListener('click', function (e) {
                const selectedId = e.target.getAttribute('data-id');
                myTodoList.done(selectedId);
            })

            del_btn.addEventListener("click", function (e) {
                const deletedId = e.target.getAttribute('data-id');
                myTodoList.delete(deletedId);
            })

            if (object_item.isDone) {
                liElement.classList.add("checked");
            }

            this.ulElement.appendChild(liElement);

        })

    }

}

const listSection = document.querySelector("#myUL");

myTodoList = new Todo_Class(listSection);

document.querySelector("#add_button").addEventListener('click', function (){
    myTodoList.add();
});

document.querySelector("#myInput").addEventListener("keydown", function(e){
    if (e.keyCode == 13) {
        myTodoList.add()
    }
});

