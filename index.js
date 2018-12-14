function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit();


function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}


function addNewElementAsLi() {
  const employee = document.createTextNode(retrieveEmployeeInformation());
  const employeeLi = document.createElement('li');
  employeeLi.appendChild(employee);
  document.querySelector('.employee-list').appendChild(employeeLi);
}


function addNewLiOnClick() {
  document.querySelector('input[type=submit]').addEventListener('click', function() {
    addNewElementAsLi();
    document.querySelector('input').value = "";
  });
}


function clearEmployeeListOnLinkClick() {
  const list = document.querySelector('.employee-list');
  document.querySelector('a[href="#"]').addEventListener('click', function() {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  });
}
