function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

// The preventRefreshOnSubmit causes a blank <li> to be inserted after each successful new <li> added via the form. Even the solution code does this. I thought I was doing something wrong, but no. If I enter text into the field and call addNewElementAsLi() manually in the console, no blank extra <li> is generated.

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  const newLi = document.createElement('li');
  newLi.innerHTML = retrieveEmployeeInformation();
  document.querySelector('.employee-list').appendChild(newLi);
}

function addNewLiOnClick() {
  document.querySelector('input[type=submit]').addEventListener('click', function(e) {
    addNewElementAsLi();
    document.querySelector('input').value = '';
  });
}
function clearEmployeeListOnLinkClick() {
  document.querySelector('a[href="#"').addEventListener('click', function(e) {
    document.querySelector('.employee-list').innerHTML = '';
  });
}
