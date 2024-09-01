
// const btn = document.querySelector<HTMLButtonElement>('.test-btn')!;
// // u didnt specify the the html element then TS will consider it either element or null
// // so if u want the elemnt to not take null value add '!' in the end for eg. btn

// //we have another problem now TS will consider it as a but TS does not understand which elemnet is this and wont let us use methods on that element
// // so u have to tell TS that this is a button and then TS will allow u to use methods present on button

// btn.disabled = true;

// another aaproach of doing same thing as above is using type assertion
// const btn = document.querySelector('.test-btn') as HTMLButtonElement;

// btn.disabled = true;

// the project starts here

const taskForm = document.querySelector<HTMLFormElement>('.form');

const formInput = document.querySelector<HTMLInputElement>('.form-input');

const taskListElement = document.querySelector<HTMLUListElement>('.list')

type Task ={
    description:string,
    isCompleted:boolean
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask)

function loadTasks():Task[]{
   const storedTasks = localStorage.getItem('tasks')
   return  storedTasks? JSON.parse(storedTasks):[]
}
taskForm?.addEventListener('submit' , (event)=>{
    event.preventDefault();
    const taskDescription = formInput?.value;
    if(taskDescription){
       const task:Task = {
        description: taskDescription,
        isCompleted: false,
       }
    //    add task
       addTask(task)
       // render task
       renderTask(task)
    //    update localStorage
    updateStorage()
       formInput.value = '';
        return
    }
  
    alert('please enter a task description')
})

// function createTask(event){}
// if u keep it as above code then TS wont complain but if make a function somewhere and 
// give reference of the function here like this  
// taskForm?.addEventListener('submit' , createTask) TS will complaint
// so to to prevent that u have to add event type like this 
// function createTask(event: SubmitEvent){}

function addTask(task: Task):void{
    tasks.push(task)
    console.log(tasks);
    
}

function renderTask(task:Task):void{
    const taskElement = document.createElement('li')
    taskElement.textContent = task.description

    // checkbox
    const taskCheckbox = document.createElement('input')
    taskCheckbox.type = 'checkbox'
    taskCheckbox.checked = task.isCompleted

    // toggle checkbox
    taskCheckbox.addEventListener('change' , ()=>{
        task.isCompleted = !task.isCompleted
        updateStorage();
    })

    taskElement.appendChild(taskCheckbox)
    taskListElement?.appendChild(taskElement)
}

function updateStorage():void{
    localStorage.setItem('tasks' , JSON.stringify(tasks))
}