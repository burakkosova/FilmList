const form = document.getElementById('film-form');
const titleElement = document.querySelector('#title');
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url');
const cardBody = document.querySelectorAll('.card-body')[1];

eventListeners();

function eventListeners() {
  form.addEventListener('submit',addFilm);
  document.addEventListener('DOMContentLoaded',function() {
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
  });
  cardBody.addEventListener('click',deleteFilm);
}

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if(title === "" || director === "" || url === "") {
    ui.displayMessages('Lütfen tüm alanları doldurun!','danger');
  }else {
    const newFilm = new Film(title,director,url);
    UI.addFilmToUI(newFilm);
    Storage.addFilmToStorage(newFilm);
    UI.clearInputs(titleElement,directorElement,urlElement);
    UI.displayMessages('Film başarıyla eklendi.','success');
  }


  e.preventDefault();
}

function deleteFilm(e) {
  if(e.target.id === 'delete-film') {
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    UI.displayMessages('Film silindi.','info');
  }

  if(e.target.id === 'clear-films' && confirm('Tüm filmleri silmek istediğinizden emin misiniz?')) {
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
  }
}