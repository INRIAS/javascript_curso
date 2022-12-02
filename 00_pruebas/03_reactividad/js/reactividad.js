const d = document;

//State
const state = {
  todoList: [],
};

//Template evalua los valores que hay
const template = () => {
  if (state.todoList.length < 1) {
    return `<p><em>Aún no se asignaron tareas a realizar</em></p>`;
  }
  let todo = state.todoList.map((item) => `<li>${item}</li>`).join("");
  return todo;
};

//Renderizar pinta los valores evaluados

const render = () => {
  console.log(state);
  const $list = d.getElementById("todo-list");
  if (!$list) return;
  $list.innerHTML = template();
};

//Renderizar el State de forma reactiva

const setState = (obj) => {
  for (let key in obj) {
    if (state.hasOwnProperty(key)) {
      state[key] = obj[key];
    }
  }
};

//Estableciendo valores por defecto

setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
});

d.addEventListener("DOMContentLoaded", render);

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;
  e.preventDefault();

  const $item = d.getElementById("todo-item");
  if(!$item)return;

  state.todoList.push($item.value);
  render();

  //clean
  $item.value = "";
  $item.focus();
});
