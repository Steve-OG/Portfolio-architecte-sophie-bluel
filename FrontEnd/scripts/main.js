const projectsEl = document.querySelector('.gallery');

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

projectsEl.insertAdjacentHTML('beforebegin',`
  <nav id="filters-nav">
  <button class="filters-project">Tous</button>
  <button class="filters-project">Objets</button>
  <button class="filters-project">Appartements</button>
  <button class="filters-project">Hotels & restaurants</button>`)

  