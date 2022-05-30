const addBtn = document.getElementById('add');
const itemList = document.querySelector('.item-list');
console.log(itemList);

const btnId = document.querySelectorAll('.btn-to-get-by-class');
const { addForm } = document.forms;

addBtn.addEventListener('click', async (event) => {
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
        <div class="card mt-4" id="card-${item.id}" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <form action="/delete/${item.id}">
            <button type="submit" id="${item.id}" class="btn btn-primary btn-to-get-by-class">Удалить</button>
          </form>
        </div>
      </div>
      `);
    }
  }
});

// console.log('------>', btnId);

itemList.addEventListener('click', async (e) => {
  e.preventDefault();
  // btnId.forEach(async (el) => {
  // console.log('===========>', card);
  console.log('#################>', e.target);
  if (e.target.id) {
    const response = await fetch(`/delete/${e.target.id}`, {
      method: 'DELETE',
    });
      // console.log('===========>', response);
    if (response.ok) {
      // const card = e.target.closest('[data-id]');
      const card = document.getElementById(`card-${e.target.id}`)
      console.log('#################>', card);
      card.remove();
    }
  }
  // });
});
