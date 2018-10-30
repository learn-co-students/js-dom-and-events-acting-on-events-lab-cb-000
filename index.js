function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input[name="name"]');
let ul = document.querySelector('.employee-list');

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  let input = retrieveEmployeeInformation();
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener("click", () => {
    addNewElementAsLi();
    input.value = ''
  });
}

function clearEmployeeListOnLinkClick() {
  let clearButton = document.querySelector('a');
  return clearButton.addEventListener('click', () => {
    ul.innerHTML = '';
  });
}
