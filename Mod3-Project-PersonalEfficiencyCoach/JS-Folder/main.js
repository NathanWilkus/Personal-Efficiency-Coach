// import {Tasks} from "./Tasks.js";
// import { UI } from "./UI.js";
// import { aboutToggle, exampleTogggle, setTasksToggle} from "./buttons.js";

// About functionality

const aboutContent = document.getElementById("about_content");
const about = document.getElementById("about");
about.addEventListener("click", aboutToggle());

function aboutToggle() {

    if (!aboutContent.classList.contains('hide')) aboutContent.classList.add('hide');
    else aboutContent.classList.remove('hide');
}

// Example functionality

const exampleContent = document.getElementById("example_content");
const example = document.getElementById("example");
about.addEventListener("click", aboutToggle());

function exampleToggle() {

    if (!exampleContent.classList.contains('hide')) exampleContent.classList.add('hide');
    else exampleContent.classList.remove('hide');
}

// Set tasks functionality

const setTasksContent = document.getElementById("tasks_goals");
const setTasksGoals = document.getElementById("set_tasks");
about.addEventListener("click", setTasksToggle());

function setTasksToggle() {

    if (!setTasksContent.classList.contains('hide')) setTasksContent.classList.add('hide');
    else setTasksContent.classList.remove('hide');
}

//-------

// Efficiency Selection

// function efficiencyGraph() {

//     const efficiencyTracker = document.getElementById("efficiency_tracker");
//     const efficiencyRate = document.getElementById("efficiency_rate");

//     efficiencyTracker.addEventListener("mouseover", (e) => {

//         const width = e.target.offsetWidth;
//         const x = e.offsetX;

//         efficiencyRate.textContent = Math.ceil((x / width) * 100) + '%';

//     });
// }



// Form 


// function taskAndGoals() {

// Variables for 

function logTask() { 
    

    
    // class Tasks {
    //         static tasksGoals = [];
        
    //         constructor(task, specifics, startTime, hours, minutes, rating) {
    //                 this.id = Date.now();
    //                 this.task = task;
    //                 this.specifics = specifics;
    //                 this.startTime = startTime
    //         this.hours = hours;
    //         this.minutes = minutes;
    //         this.rating = rating;
    //     }
    //     add() {
    //         Tasks.tasksGoals.push(this)
    //         console.log(this)
    //     }

    // }

    // countdownTimer() {
    //     if (targetStartHour == 0)

    // }

    
}

// function clearForm() {
//     task = "";
//     specifics = "";
//     startTime = "";
//     hours = "";
//     minutes = "";
// }


// Timers / Countdowns
// console.log(targetStartHour);
// console.log(targetStartMinutes);

// const task = document.getElementById("task_goal").value;
// const specifics = document.getElementById("specifics").value;
// const startTime = document.getElementById("start_time").value;


// // addBtn.addEventListener('click', () => {


// //     const ui = new UI();
// //     ui.TasksModal({ task: 'testing', specifics: 'something'})
// // })



// let startTimeArr = startTime.split(":");
// let startTimeHour = Number(startTimeArr[0]);
// let startTimeMinutes = Number(startTimeArr[1]);
// console.log(startTime)
// console.log(startTimeHour);
// console.log(startTimeMinutes);

// // current time
// const targetStartTime = new Date();
// let targetStartHour = targetStartTime.getHours();
// let targetStartMinutes = targetStartTime.getMinutes();


// const hours = Number(document.getElementById("hours").value);
// const minutes = Number(document.getElementById("minutes").value);

// const rating = 0;

// let timer;
// let totalStartMinutes = ((startTimeHour * 60) + startTimeMinutes);
// let totalTargetMinutes = ((targetStartHour * 60) + targetStartMinutes)
// let countdownToStart = (totalStartMinutes - totalTargetMinutes) * 60000;
// let displayTask = false;

// // console.log(countdownToStart);

// if (countdownToStart > 0) countdownToStart = setTimeout(displayCurrentTask, countdownToStart)

// if (countdownToStart <= 0) {
//     displayTask = true
//     timer = {

//     }
// }

// if (countdownToStart <= 0 && timer > 0) displayTask = true


// displayTask = false;

// while (displayTask == true) {
//     let taskDisplay = document.getElementById("display_task");
//     taskDisplay.innerHTML = `
//     <div id="current_task" class="container-fluid, border border-primary, rounded-4,current_task">Tasks</div>
//     <div id="current_task" class="container-fluid, border border-primary, rounded-4,current_task">Specifics</div>
//     <div id="current_task" class="container-fluid, border border-primary, rounded-4,current_task">Timer</div>
//     `;
//     // taskDisplay.innerHTML = `
//     // <div id="current_task" class="container-fluid, border border-primary, rounded-4, current_task">${Tasks.task}</div>
//     // <div id="current_task" class="container-fluid, border border-primary, rounded-4, current_task">${Tasks.specifics}</div>
//     // <div id="current_task" class="container-fluid, border border-primary, rounded-4, current_task">${timer}</div>
//     // `

//     taskDisplay.appendChild(taskDisplay);

//     }
