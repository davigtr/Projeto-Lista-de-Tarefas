function tarefa() {
  const tarefas = document.querySelector('#input-tarefas').value
  
  document.querySelector('#ol').innerHTML += `
  <li>${tarefas}</li>
  <button type="button" onclick="removeT()">delete</button>
  `
}

function removeT() {
  
}

