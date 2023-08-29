const createToDoBtn = document.getElementById('create-todo-btn');
const toDoInput = document.getElementById('todo-input');
const toDoList = [];


createToDoBtn.addEventListener('click', function() {
    if(toDoInput.value !== '') {
        const todoValue = toDoInput.value;
        toDoInput.value = ''
        let toDoItem = new ToDo (todoValue)
        toDoList.push(toDoItem)
    }

})

class ToDo {
    constructor (title) {
        this.title = title;
        this.isChecked = false;
        this.toDoContainer = document.createElement('div');
        this.toDoCheck = document.createElement('input');
        this.toDoCheck.addEventListener('change', () => {

            if(this.toDoCheck.checked) {
                this.toDoTitle.style.textDecoration = 'line-through'
                this.changeBtn.classList.add('disabled')
            } else {
                this.toDoTitle.style.textDecoration = 'none'
                this.changeBtn.classList.remove('disabled')
            }
        })
        this.toDoTitle = document.createElement('label');
        this.btnWrapper = document.createElement('div');
        this.changeBtn = document.createElement('button');
        this.changeBtn.addEventListener('click', () => {
            const newToDoInput = document.createElement('input');
            newToDoInput.type = 'text';

            this.toDoContainer.replaceChild(newToDoInput, this.toDoTitle);
            newToDoInput.addEventListener('keydown', (e) => {
                console.log(e);

                if(e.key === 'Enter') {
                    this.title = newToDoInput.value;
                    this.toDoTitle.innerHTML = this.title;
                    this.toDoContainer.replaceChild(this.toDoTitle, newToDoInput);
                }
            })
        })
        this.deleteBtn = document.createElement('button');
        this.deleteBtn.addEventListener('click', () => {
            console.log(this);
            this.toDoContainer.remove()
                toDoList = toDoList.filter((item) => {
                return item !== this
            })
            console.log(toDoList);
        })


        this.render()
    }

    showToDoTitle () {
        console.log(this.title);
    }

    render () {
        this.toDoCheck.type = 'checkbox';
        this.toDoCheck.classList.add('form-check-input')
        this.toDoContainer.append(this.toDoCheck);
        this.toDoContainer.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'mb-2')
        const listWrapper = document.querySelector('.list-wrapper');
        this.toDoContainer.append(this.toDoTitle);
        listWrapper.append(this.toDoContainer)
        this.toDoTitle.innerHTML = this.title;
        this.toDoTitle.classList.add('form-check-label')
        this.toDoContainer.append(this.btnWrapper);
        this.btnWrapper.classList.add('btn-group', 'btn-group-sm')
        this.btnWrapper.append(this.changeBtn);
        this.btnWrapper.append(this.deleteBtn);
        this.changeBtn.innerHTML = 'Изменить';
        this.changeBtn.classList.add('btn', 'btn-warning');
        this.deleteBtn.innerHTML = 'Удалить';
        this.deleteBtn.classList.add('btn', 'btn-dark')
    }


}

