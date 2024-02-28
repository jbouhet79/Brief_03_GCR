async function getListFilms() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjViOWQ4NTQzODM2OGYxMzg2OTc3MzlkMDY3NmU5MCIsInN1YiI6IjY1ZGI2NDU5ODI2MWVlMDE4NWMyZmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqaglO-GjtRSZOQomGgTqN6cuNF7LE1oecefis70Kds'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&primary_release_date.gte=2024-02-27&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => response.results)
    // .then(movies => {
    //   // console.log(movies);
    //   return movies
    // })
    .then(movies => movies.forEach(createFilmInDOM))
    .catch(err => console.error(err));
}


function createFilmInDOM(movie) {
  // console.log(movie)
  const dest = document.querySelector('.grid-films')
  const btn = document.createElement('button')
  btn.id = movie.id
  dest.appendChild(btn)
  // const gridFilm = document.createElement('div')
  let movieTitle = document.createElement('h2')
  movieTitle.innerText = movie.title
  btn.appendChild(movieTitle)
  let moviePoster = document.createElement('img')
  const image = movie.poster_path
  console.error(moviePoster);

  moviePoster.src = "https://image.tmdb.org/t/p/w500" + image
  btn.appendChild(moviePoster)
  // let movieDate = document.createElement('p')
  // movieDate.innerText = movie.release_date
  // dest.appendChild(movieDate)
  // let movieGenre = document.createElement('p')
  // movieGenre.innerText = movie.genre_ids
  // dest.appendChild(movieGenre)
  // let movieDate = document.createElement('p')
  // movieDate.innerText = movie.release_date
  // dest.appendChild(movieDate)
  // document.location.href = `/details.html?id=${idFilm}`
  function test() {
    let inputFilm = document.querySelectorAll("button")
    console.log(inputFilm);
    inputFilm.forEach((button) => {
      button.addEventListener('click', (event) => {
        // const idFilm = btn.id
        console.log(event.currentTarget.id);
        document.location.href = `/details.html?id=${event.currentTarget.id}`
      })
    })
  }
  test();
}

getListFilms()








// function characterLoad() {
//   let previewContainer = document.querySelector('.character-preview');
//   let previewBox = previewContainer.querySelectorAll('.preview');
//   let modal = document.getElementById("myModal");

//   let dataTargets = [
//       {   
//           target : 'c-1',
//           image : 'images/mao_mao.png',
//           name: 'Mao Mao', 
//           description: `Fille d'un apothicaire vivant à la périphérie de la 
//            et sa goûteuse officielle. `
//       },

//       {   
//           target: 'c-2',
//           image : 'images/jinshi2.png',
//           name: 'Jinshi',
//           description: `Eunuque à la beauté surnaturelle, il officie à la cour intérieure où résident les concubines et leur personnel respectif en tant qu'intendant. Alors que son visage attire les hommes et les femmes du palais, il se trouve plutôt attiré par Mao Mao et adore la taquiner car c'est l'unique personne qui reste insensible à son charme.` 
//       },
//     ];

//     document.querySelectorAll('.characters-container .character').forEach(character => {
//       character.onclick = () => {
//           let name = character.getAttribute('data-name');
//           console.log(name);
//           dataTargets.forEach(dataTarget => {
//               if (name === dataTarget.target) {
//                   modal.style.display = "block";
//                   previewContainer.innerHTML = `
//                   <div>
//                       <img src="${dataTarget.image}" alt="">
//                       <h3>${dataTarget.name}</h3>
//                       <p>${dataTarget.description}</p>
//                   </div>
//                   `;
//               }
//           });
//       };
//   });
  
//   window.onclick = function(event) {
//       if (event.target == modal) {
//           modal.style.display = "none";
//       }
//   };
  
//   previewBox.forEach(close =>{
//       close.querySelector('.fa-times').onclick = () =>{
//       close.classList.remove('active');
//       previewContainer.style.display = 'none';
//       };
//   });
// }