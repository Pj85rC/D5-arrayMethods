const list = document.querySelector("#taskList");
      const newTask = document.querySelector("#iNewTask");
      const btnAdd = document.querySelector("#btnAdd");
      const total = document.querySelector("#total");
      const done = document.querySelector("#done");
      const iCheck = document.querySelectorAll("#check");

      const tasks = [];

      btnAdd.addEventListener("click", () => {
        //Validation
        if (newTask.value !== "") {
          tasks.push({ id: Date.now(), task: newTask.value, chck: false });
        } else {
          alert("No puedes dejar la tarea vacía");
        }

        newTask.value = "";
        updateTasks();
      });
      
      deleteTask = (id) => {
        tasks.splice(
          tasks.findIndex((task) => task.id === id),
          1
        );
        updateTasks();
      };

      updateTasks = () => {
        let html = "";
        tasks.forEach(({ id, task, chck}) => {
          html += `<li class="list">${id} ${task} <input id="check${id}" type="checkbox" />
            <button id="bDelete${id}" onclick="deleteTask(${tasks.id})" >Borrar tarea</button></li>`;
        });

      
        const check = () =>
        done.innerHTML = iCheck.filter((task) => task.checked === true).length;



        //checkbox checked
        // const iCheck = document.querySelectorAll("input[type=checkbox]");

        // const checks = () =>
        //   done.innerHTML = iCheck.filter((i) => i.checked === true).length;

        
          // done.innerHTML = iCheck.filter(checkbox =>
          //   checkbox.checked === true) ;

        // const checks = () => {
        //   iCheck.forEach((checkbox) => {
        //     if (checkbox.checked === true) {
        //       done.innerHTML = Number(done.innerHTML) + 1;
        //     }
        //   });
        // };

        
        // iCheck.forEach((checkbox) => {

        //   checkbox.addEventListener("click", () => {
        //     /* checkbox.checked ? done++ ; */
        //       if (checkbox.checked = true) {
        //       done.innerHTML =  Number(done.innerHTML) +1;
        //     }
        //   });
        // });

        console.log(html);
        console.log(tasks);
        console.log(done.length );
        console.log("Visualizando checks:", done);
        total.innerHTML = tasks.length;
        list.innerHTML = html;
      };