const d = document;

//El State
const state = {
    todoList: [],
  };

//template UI
const template = () => {
    if (state.todoList.length < 1) {
      return `<p><em>Lista sin tareas por hacer</em></p>`;
    }
    let todos = state.todoList.map((item) => `<li>${item}</li>`).join("");
    return todos;
  };

//Renderizado de UI

const render = () => {
  console.log(state);
  const $list = d.getElementById("to-do-list");
  if (!$list) return;
  $list.innerHTML = template();
};

//Renderizar el State de forma reactiva

const setStatus = (obj) => {
  for (const key in obj) {
    if (state.hasOwnProperty(key)) {
      state[key] = obj[key];
    }
  }
};

//Estableciendo valores por defecto

setStatus({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
});

d.addEventListener("DOMContentLoaded", render);

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#to-do-form")) return false;
  e.preventDefault();

  const $item = d.getElementById("to-do-item");
  if (!$item) return;

  //Actualizar el state y UI;
  state.todoList.push($item.value);
  render();

  //Clean
  $item.value = "";
  $item.focus();
});
