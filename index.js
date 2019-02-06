function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  let input = document.querySelector('input').value
  return input
}

function addNewElementAsLi() {
  input = retrieveEmployeeInformation()
  let list = document.querySelector('.employee-list')
  let li = document.createElement('li')
  li.append(input)
  list.appendChild(li)
}

function addNewLiOnClick() {
  input = retrieveEmployeeInformation()
  let list = document.querySelector('.employee-list')
  let li = document.createElement('li')
  li.append(input)
  list.appendChild(li)
  document.querySelector('input').value = ''
}

// clearEmployeeListOnLinkClick(): This empties out the employee list when "Clear employee list" button clicked.
function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(event){
    ul.innerHTML = ''
  })
}



