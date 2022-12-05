export class UI {
    renderTasks(tasksGoalsArr) {
        const tasksGoals = document.getElementById('tasks_goals');
        // if (tasksGoalsArr.length > 0) 

    }

    displayTasksModal(tasks) {
        const modal = document.getElementById("tasks_modal");
        const modalBtn = document.getElementById("tasks_modal_trigger");



      modal.innerHTML = ` 
      
      <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content modal-dialog modal-dialog-centered mx-10 p-xl-5">
              <h3 class="modal-title modal-dialog modal-dialog-centered d-block">Tasks and Goals</h3>
              <h3 class="modal-title modal-dialog modal-dialog-centered d-block">${tasks.task}</h3>
              <h3 class="modal-title modal-dialog modal-dialog-centered d-block">Specifics</h3>
              <h3 class="modal-title modal-dialog modal-dialog-centered d-block">${tasks.specifics}</h3>

              <h2 class="modal-title modal-dialog modal-dialog-centered d-block">${timer}</h2>

          </div>
      </div>`;

      modalBtn.click();



    // modal.innerHTML =   `


    //         <div class="modal-dialog modal-dialog-centered">
    //             <div class="modal-content modal-dialog modal-dialog-centered mx-10 p-xl-5">
    //                 <h3 class="modal-title">Time's Up!</h3>
       
    //                 <div class="modal-body">
                     
    //                   <form>
    //                       <div>
    //                       <label for="efficiency" class="form-label">My efficiency % for ${tasks.task} is:</label>
    //                       <input type="number" class="form-control" id="hours" placeholder="0 - 100"></input>
    //                       </div>
    //                   </form>
    //                 <div class="modal-footer">
    //                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Log my progress</button>
    //             </div>
    //         </div>`;
    }
}