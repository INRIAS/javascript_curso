const d = document;

//El State
const state = {
  todoList: [],
};

//template UI
const template = () => {
  if (template.data.todoList.length < 1) {
    return `<p><em>Lista sin tareas por hacer</em></p>`;
  }
  let todos = template.data.todoList.map((item) => `<li>${item}</li>`).join("");
  return todos;
};

template.data={
  todoList:[]
}

//Renderizado de UI

const render = () => {
  console.log(template.data);
  const $list = d.getElementById("to-do-list");
  if (!$list) return;
  $list.innerHTML = template();
};

//Renderizar el State de forma reactiva

const setStatus = (obj) => {
  for (const key in obj) {
    if (template.data.hasOwnProperty(key)) {
      template.data[key] = obj[key];
    }
  }
  render();
};

//Estableciendo valores por defecto

//Realizar una copia del estado.
const getState = () => JSON.parse(JSON.stringify(template.data));

d.addEventListener("DOMContentLoaded", render);

setStatus({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
});


d.addEventListener("submit", (e) => {
  if (!e.target.matches("#to-do-form")) return false;
  e.preventDefault();

  const $item = d.getElementById("to-do-item");
  if (!$item) return;

  //Actualizar el state de forma reactiva
  // state.todoList.push($item.value);
  const lastState = getState();
  lastState.todoList.push($item.value);
  setStatus({ todoList: lastState.todoList });
 
  //Clean
  $item.value = "";
  $item.focus();
});
