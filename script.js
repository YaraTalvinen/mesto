//выбираю кнопку редактирования профиля editButton
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.edit-button');
const popupEditProfile = document.querySelector('.popup');

// функция, которая будет добавлять блоку popup модификатор _opened
function handleEditButton() {
  popupEditProfile.classList.add('popup_opened');
};

editButton.addEventListener('click', handleEditButton); //слушатель

//выбираю кнопку закрытия формы closeButton
const closeButton = popupEditProfile.querySelector('.popup__close-button');

//убираем из блока popup модификатор _opened
function handleCloseButton() {
  popupEditProfile.classList.remove('popup_opened');
};

closeButton.addEventListener('click', handleCloseButton); //слушатель

// Находим форму в DOM
let formElement = document.querySelector('.popup__input-form');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.


  // Находим поля формы в DOM
  let nameInput = document.querySelector('.popup__input_name_name');
  let jobInput = document.querySelector('.popup__input_name_job');

  // Получите значение полей из свойства value
  //значения надо получить из формы ввода или из profile__info? Не понимаю( склоняюсь все же к форме ввода
  // nameInput.getAttribute('profile__name.value');
  // jobInput.getAttribute('profile__job.value');

  nameInput.getAttribute('popup__input_name_name.value');
  jobInput.getAttribute('popup__input_name_job.value');


  // Выберите элементы, куда должны быть вставлены значения полей
  let name = profile.querySelector('.profile__name');
  let job = profile.querySelector('.profile__job');

  // Вставьте новые значения с помощью textContent
  name.textContent = `${name.value}`;
  job.textContent = `${job.value}`;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка».
formElement.addEventListener('submit', handleFormSubmit);
