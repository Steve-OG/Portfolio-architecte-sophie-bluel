const projectsEl = document.querySelector('.gallery');

function fetchWork(projectsEl) {
  fetch("http://localhost:5678/api/works")
  .then(res => res.json())
  .then(data => {
    data.forEach(post => {
      projectsEl.insertAdjacentHTML('beforeend', 
        `<figure>
          <img src="${post.imageUrl}"
          <figcaption>${post.title}</figcaption>
        </figure>`);
        });
      });
};

fetchWork(projectsEl);

projectsEl.insertAdjacentHTML('beforebegin',`
  <nav id="filters-nav">
  <button>Tous</button>
  <button>Objets</button>
  <button>Appartements</button>
  <button>Hotels & restaurants</button>`)

  