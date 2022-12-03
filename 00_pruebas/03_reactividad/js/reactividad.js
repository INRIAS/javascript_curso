const d = document;

//State
const state = {
  todoList: [],
};

//Template evalua los valores que hay
const template = () => {
  if (template.locateState.todoList.length < 1) {
    return `<p><em>Aún no se asignaron tareas a realizar</em></p>`;
  }
  let todo = template.locateState.todoList.map((item) => `<li>${item}</li>`).join("");
  return todo;
};

template.locateState={
  todoList:[]
};

//Renderizar pinta los valores evaluados

const render = () => {
  console.log(template.locateState);
  const $list = d.getElementById("todo-list");
  if (!$list) return;
  $list.innerHTML = template();
};

//Renderizar el State de forma reactiva

const setState = (obj) => {
  for (let key in obj) {
    if (template.locateState.hasOwnProperty(key)) {
      template.locateState[key] = obj[key];
    }
  }
  render();
};

const getState=()=>JSON.parse(JSON.stringify(template.locateState))

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

  // state.todoList.push($item.value);
  const lastState=getState();
  lastState.todoList.push($item.value);
  setState({
    todoList:lastState.todoList
  })
  
  //clean
  $item.value = "";
  $item.focus();
});
