document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

});

const handleNewItemFormSubmit = function (event){
  event.preventDefault();

  const programmingLanguages = createProgrammingListitem(event.target);
  const language = document.querySelector('#programming-languages');
  language.appendChild(programmingLanguages);

  event.target.reset();
}

const createProgrammingListitem = function(form){
  const programmingLanguages= document.createElement('li');
  programmingLanguages.classList.add('language-list-item');

  const language = buildElement('h3', form.language.value);
  programmingLanguages.appendChild(language);
  const date = buildElement('p', form.date.value);
  programmingLanguages.appendChild(date);
  const level = buildElement('p', form.level.value);
  programmingLanguages.appendChild(level);

  return programmingLanguages;

}

const buildElement = function (tag, value) {
  const element = document.createElement(tag);
  element.textContent = value;
  return element;
}

const handleDeleteAllClick = function(event){
  const language = document.querySelector('#programming-languages');
  language.innerHTML = '';
}
