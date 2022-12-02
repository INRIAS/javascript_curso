const d = document,
  $item = d.getElementById("to-do-item"),
  $list = d.getElementById("to-do-list");

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#to-do-form")) return false;
  e.preventDefault();

  //Agregar un ITEM a la lista

  let $li=d.createElement("li");
  $li.textContent=$item.value;

  $list.appendChild($li)

  //Clean
  $item.value="";
  $item.focus();
});
