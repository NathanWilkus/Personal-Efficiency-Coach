export class Tasks {
    static tasksGoals = [];

    constructor(task, specifics, startTime, hours, minutes, rating) {
        this.id = Date.now();
        this.task = task;
        this.specifics = specifics;
        this.startTime = startTime
        this.hours = hours;
        this.minutes = minutes;
        this.rating = rating;
        this.countdownTimer = null;

    }
    add() {
        Tasks.tasksGoals.push(this)
        // console.log(this)
    }

    startTimer() {
        this.countdownTimer = setInterval(() => {


        }, 1000)
    }

    clearTimer() {
        clearInterval(this.countdownTimer);
    }

    getCurrentTime() {
        let targetStartTime = new Date();
        let targetStartHour = targetStartTime.getHours();
        let targetStartMinutes = targetStartTime.getMinutes();
        targetStartTime = `${targetStartHour}:${targetStartMinutes}`
        return targetStartTime;
    }

}

// countdownTimer() {
//     if (targetStartHour == 0)

// }

