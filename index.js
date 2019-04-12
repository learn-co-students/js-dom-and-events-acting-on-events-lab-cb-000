function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(){
    return document.querySelector('input').value;
}

function addNewElementAsLi(){
  let name = retrieveEmployeeInformation();
  if(name != ""){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(name));
    document.querySelector("ul").appendChild(li);
  }
}


function addNewLiOnClick(){
  document.querySelector('form').addEventListener('submit', function(){
    addNewElementAsLi();
    document.querySelector('input').value = '';
  })
}


function clearEmployeeListOnLinkClick(){
  debugger;
  let nodes = document.querySelectorAll('ul.employee-list li');
  // for each (var node in nodes){
  //   node.remove();
  // }

  for (i = 0; i < nodes.length; i++) {
    nodes[i].remove();
  }
}
