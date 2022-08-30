console.log('Sample JavaScript #5 HW #17');
let container = null;
let prevIndicator = null;
function createContainer() {
  el = document.createElement('div');//создаем блок div
  el.setAttribute('id', 'carousel');//создаем атрибут id со значением carousel
  el.setAttribute('class', 'carousel');//создаем класс со значением carousel
  document.querySelector('body').appendChild(el);//аппендим во внутрь тега боди
  container = document.querySelector('#carousel');// контейнер равен диву с айди карусель
}
function createSlides(n) {
  slidesContainer = document.createElement('ul');//создаем тег ul
  slidesContainer.setAttribute('class', 'slides');//создаем класс со значением slides
  for (i = 0; i < n; i++) {// когда и больше 0 тогда создаем элементы
    let slideItem = document.createElement('li');//первый элемент тег li = slideItem
    let slideLink = document.createElement('a');//второй элемент link a = slideLink
    slideItem.setAttribute( //добавляем класс актив - когда активный слайд, иначе класс удаляем
      'class',
      i === 0 ? 'slides__item active' : 'slides__item'
    );
    slideLink.setAttribute('href', '#');//добавляем атрибуты href и # для slideLink
    slideItem.appendChild(slideLink);
    slidesContainer.appendChild(slideItem);
  }
  container.appendChild(slidesContainer);
}
function createIndicators(n) {
  indicatorsContainer = document.createElement('div');//создаем div
  indicatorsContainer.setAttribute('class', 'indicators');//создаем в нем атрибут класс со значением индикаторы
  for (i = 0; i < n; i++) { //когда больше 0 плюсуем
    let indicatorsItem = document.createElement('span');//создаем span
    indicatorsItem.setAttribute(//когда span активный добавляем класc актив, иначе удаляем
      'class',
      i === 0 ? 'indicators__item active' : 'indicators__item'
    );
    indicatorsItem.setAttribute('data-slide-to', i);//в indicatorsItem добавляем атрибут data-slide-to
    indicatorsContainer.appendChild(indicatorsItem);//ставим indicatorsItem в блок indicatorsContainer
  }
  container.appendChild(indicatorsContainer);//ставим indicatorsContainer в container div #carousel
}
function createControls() {
  controlsContainer = document.createElement('div');// создаем div
  controlsContainer.setAttribute('class', 'controls');//создаем атрибут класс со значением controls
  for (i = 0; i < 3; i++) {
    let controlItem = document.createElement('div');// создаем тег div
    let controlIcon = document.createElement('i');// создаем тег i
    const defItemClass = 'controls__item';
    const defIconClass = 'fas';
    switch (i) {
      case 0: //массиву со значением controlItem добавляем классы
        controlItem.setAttribute('class', `${defItemClass} controls__prev`);
        controlIcon.setAttribute('class', `${defIconClass} fa-chevron-left`);
        break;
      case 1:
        controlItem.setAttribute('class', `${defItemClass} controls__next`);
        controlIcon.setAttribute('class', `${defIconClass} fa-chevron-right`);
        break;
      case 2:
        controlItem.setAttribute('class', `${defItemClass} controls__pause`);
        controlIcon.setAttribute('class', `${defIconClass} fa-play`);
        break;
    }
    controlItem.appendChild(controlIcon);
    controlsContainer.appendChild(controlItem);
  }
  container.appendChild(controlsContainer);
}
function indicatorsHandler(e) {
  let target = e.target;
  //когда индикатор активный, добавляем стиль backgroundColor со значение красный
  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';
    //если индикатор не активный, стиль удаляем
    if (prevIndicator !== null) prevIndicator.removeAttribute('style');
    prevIndicator = target;
  }
}
function setListener() {
  let indicatorsContainer = document.querySelector('div.indicators');
  indicatorsContainer.addEventListener('click', indicatorsHandler);
}
function createStyle() {
  styleContainer = document.createElement('style');//добавляем тег style
  let styleCode = `
    .controls,
    .slides {
      position: relative;
      list-style: none;
      width:600px;
      height:300px;
      background-color: blue;
      display:block;
      margin:0 auto;
    }
    .indicators {
      display: flex;
      justify-content: center;
    }
    .indicators__item {
      display: block;
      width: 10px;
      height: 10px;
      background-color: black;
      margin: 5px;
      border: 1px solid green;
    }`;
  styleContainer.innerHTML = styleCode;
  container.appendChild(styleContainer);
}
function createCarousel(slidesCount = 5) {
  container = document.querySelector('#carousel');
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  setListener();
}
createCarousel();