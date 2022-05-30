const body = document.querySelector('.container');
const { addForm } = document.forms;

body.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.id === 'add') {
    const formData = Object.fromEntries(new FormData(addForm));

    const response = await fetch('/addItem', {
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
        <div class="card mt-4" id="${item.id}" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <form action="/delete">
            <button type="submit" id="${item.id}" class="btn btn-primary btn-to-get-by-class">Удалить</button>
          </form>
        </div>
      </div>
      `);
    }
  }

  const btnId = document.querySelectorAll('.btn-to-get-by-class');

  btnId.forEach(async (el) => {
    const card = event.target.closest('[data-id]');
    if (event.target.id === el.id) {
      const response = await fetch(`/delete/${el.id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        card.remove();
      }
    }
  });
});
