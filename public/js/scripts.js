const addBtn = document.getElementById('add');
const register = document.getElementById('reg');
/* const itemList = document.querySelector('.item-list');
console.log(itemList); */
const btnId = document.querySelector('.items-list-wrapper');

const { addForm } = document.forms;

addBtn?.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.id === 'add') {
    const formData = Object.fromEntries(new FormData(addForm));

    const response = await fetch('/admin/addItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const item = await response.json();

      const itemsListWrapper = document.querySelector('.items-list-wrapper');

      itemsListWrapper.insertAdjacentHTML('afterbegin', `
        <div class="card mt-4" id="card-${item.id}" data-id="${item.id}" style="width: 18rem;">
        <div class="img-wrapper">
          <img src="${item.img}" class="card-img-top" alt="">
        </div>
        <div class="card-body">
          <div class="title-wrapper">
            <h5 class="card-title">${item.name}</h5>
          </div>
          <div class="form-wrapper">
            <div class="modal-btn-wrapper">
                <!-- Кнопка и модалка для редактирования аккаунта -->
                <div class="container-modal">
                  <div id="${item.id}">
                    <button id="${item.id}" data-id="${item.id}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editormodal${item.id}" aria-hidden="true">
                      Редактировать
                    </button>
                    <!-- Modal -->
                    <div class="modal fade" id="editormodal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Редактировать товар</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <div>
                              <div>
                                <form class="editForm-${item.id}" method="post">
                                  <input class="changeInput" type="text" name="name"
                                    placeholder="Название товара">
                                  <input class="changeInput" type="text" name="photo"  placeholder="Фото (url)"><br>
                                  <button type="submit" class="creator btn btn-primary mt-2" data-id="${item.id}" id="saveChanges">Сохранить изменения</button>
                                  <button type="button" class="btn btn-secondary mt-2" data-bs-dismiss="modal">Закрыть</button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Modal -->
                  </div>
                </div>
              
          </div>
          <div class="delete-btn-wrapper">
            <form action="/admin/delete/${item.id}">
              <button type="submit" id="${item.id}" class="btn btn-primary btn-to-get-by-class">Удалить</button>
            </form>
          </div>
        </div>
      </div>
      `);
    }
  }
});

btnId?.addEventListener('click', async (e) => {
  e.preventDefault();
  console.log(e.target.tagName);
  if (e.target.tagName === 'BUTTON' && e.target.innerText === 'Удалить') {
    console.log('--------->>>');
    const response = await fetch(`/admin/delete/${e.target.id}`, {
      method: 'DELETE',
    });

    // console.log('===========>', response);
    if (response.ok) {
      // const card = e.target.closest('[data-id]');
      const card = document.getElementById(`card-${e.target.id}`);
      // console.log('#################>', card);
      card.remove();
    }
  } else if (e.target.id === 'saveChanges') {
    const attr = e.target.getAttribute('data-id');
    console.log('&&&&&&&&&&&&&', attr);

    const editForm = document.querySelector(`.editForm-${attr}`);
    console.log('&&&&&&&&&&&&&', editForm);
    const formNewData = Object.fromEntries(new FormData(editForm));
    console.log(formNewData);
    const response = await fetch(`/admin/update/${attr}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formNewData),
    });
    if (response.ok) {
      window.location.replace('/admin');
    }
  }
});

register?.addEventListener('click', async (event) => {
  event.preventDefault();
  console.log(event.target);
  const { regist } = document.forms;
  const formNewData = Object.fromEntries(new FormData(regist));
  console.log('--------->>>', formNewData);
  console.log('==============>>>', regist);

  if (formNewData.name === '' || formNewData.login === '' || formNewData.pass === '') {
    alert('Заполните все поля формы!');
  } else {
    const response = await fetch('/register/addNewUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formNewData),
    });
  
    if (response.status === 200) {
      window.location.replace('/registerSuccess');
    } else if (response.status === 201) {
      alert('Пользователь с таким e-mail уже существует!');
      window.location.replace('/register');
    }
  }
});

/* if (register) {
  register.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(register));
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      window.location.href = '/';
    }
  });
} */
