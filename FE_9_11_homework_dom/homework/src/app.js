
let iconAdd = document.getElementById('icon');
const maxItems = 10;
const clickOnButton = 1;
const start = 0;
document.getElementById('add-button').disabled = true;

function buttonUse() {
  if(document.getElementById('text-input').value.trim().length === start) {
    document.getElementById('add-button').disabled = true;
  }else{
    document.getElementById('add-button').disabled = false;
  }
}

document.getElementById('text-input').onkeyup = function(){
  buttonUse();
}

function addNewItem() {
  const li = document.createElement('li');
  li.setAttribute('class', 'newElement');
  let text = document.getElementById('text-input').value;
  let button_check = document.createElement('button');
  button_check.setAttribute('class', 'button_check');
  button_check.innerHTML = '<i class="material-icons">check_box_outline_blank</i>'
  let button_delete = document.createElement('button');
  button_delete.setAttribute('class', 'button_delete');
  button_delete.innerHTML = '<i class="material-icons">delete</i>';
  let txt = document.createTextNode(text);
  iconAdd.appendChild(li);
  li.appendChild(button_check);
  li.appendChild(txt);
  li.appendChild(button_delete);

  button_check.onclick = function(event){
  button_check.innerHTML = '<i class="material-icons">check_box</i>'
};
button_delete.onclick = function(event){
 iconAdd.removeChild(li);
  document.getElementById('text-input').disabled = false;
    };
  if(text.length > start && iconAdd.getElementsByTagName('li').length <= maxItems - clickOnButton) {
    document.getElementById('text-input').value = '';
    document.getElementById('add-button').disabled = true;
  }else if(iconAdd.getElementsByTagName('li').length === maxItems){
    document.getElementById('add-limit').value = '';
    document.getElementById('add-button').disabled = true;
    document.getElementById('add-limit').style.display = 'block';
    document.getElementById('text-input').disabled = true;
    document.getElementById('text-input').value = '';
    document.getElementById('add-button').disabled = true;
  }
}
