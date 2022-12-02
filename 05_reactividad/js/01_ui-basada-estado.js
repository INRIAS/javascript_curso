const d = document;  
  //El State
  const state = {
    todoList: [],
  },
  
  //template UI
  template = () => {
    if (state.todoList.length < 0) {
      return `<p><em>Lista sin tareas por hacer</em></p>`;
    }
    
    let todos = state.todoList.map((item) => `<li>${item}</li>`).join("");
    return todos;
  };
  
  //Renderizado de UI
  
  const render=()=>{
    console.log(state);
    $list = d.getElementById("to-do-list");
    if (!$list) return;
    $list.innerHTML= template();
  }

  d.addEventListener("DOMContentLoaded",render)


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
