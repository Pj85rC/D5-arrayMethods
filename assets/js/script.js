const list = document.querySelector("#taskList");
const newTask = document.querySelector("#iNewTask");
const btnAdd = document.querySelector("#btnAdd");
const total = document.querySelector("#total");
const done = document.querySelector("#done");
const iCheck = document.querySelector("input[type=checkbox]");

const tasks = [
  { id: 1, task: "tarea1", chck: false },
  { id: 2, task: "tarea2", chck: false },
  { id: 3, task: "tarea3", chck: false },
];

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
    tasks.findIndex((task) => task.id == id),
    1
  );
  updateTasks();
};

updateCheckValue = (id) => {
  const cId = tasks.find((task) => task.id == id);
  cId.chck = !cId.chck;
  console.log("visualizando chck", cId.chck);

  updateTasks();
};

updateTasks = () => {
  let html = "";
  tasks.forEach(({ id, task, chck }) => {
    html += `<li class="list">${id} ${task} <input id="check${id}" ${
      chck ? "checked" : ""
    } type="checkbox" onChange="updateCheckValue(${id});" />
            <button id="bDelete${id}" onclick="deleteTask(${id})" >Borrar tarea</button></li>`;
  });
  check();
  total.innerHTML = tasks.length;
  list.innerHTML = html;
};

const check = () =>
  (done.innerHTML = tasks.filter((task) => task.chck === true).length);

updateTasks();
