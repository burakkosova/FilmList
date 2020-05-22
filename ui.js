class UI {

  static addFilmToUI (newFilm) {
    const filmList = document.getElementById("films");
    filmList.innerHTML += 
    `
      <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>
    `;
  };
  
  static clearInputs(element1,element2,element3) {
    element1.value = '';
    element2.value = '';
    element3.value = '';
  }
  
  static displayMessages(message,type) {
    const cardBody = document.querySelector('.card-body');
    const showMessage = document.createElement('div');
    showMessage.className = `alert alert-${type}`;
    showMessage.setAttribute('role','alert');
    showMessage.textContent = message;
    cardBody.appendChild(showMessage);
  
    setTimeout(() => {
      showMessage.remove();
    }, 2000);
  }
  
  static loadAllFilms(films) {
    films.forEach(film => {
      this.addFilmToUI(film);
    });
  }
  
  static deleteFilmFromUI(btnDelete) {
    btnDelete.parentElement.parentElement.remove();
  }
  
  static clearAllFilmsFromUI() {
    const filmList = document.getElementById("films");
    while(filmList.firstElementChild !== null) {
      filmList.firstElementChild.remove();
    }
  }

}


