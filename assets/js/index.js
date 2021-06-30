function tarefa() {
  const tarefas = document.querySelector('#input-tarefas').value
  
  document.querySelector('#ol').innerHTML += `<li>${tarefas}</li>`
}

