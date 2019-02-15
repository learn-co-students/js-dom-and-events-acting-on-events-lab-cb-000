
function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
};

function addNewElementAsLi() {
  const employee = retrieveEmployeeInformation();
  document.querySelector('ul').append(employee);
  document.querySelector('input').value = '';
}

function addNewLiOnClick() {
  document.addEventListener('click',addNewElementAsLi);
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function () {
    document.querySelector('ul').innerHTML='';
  });
}
