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




