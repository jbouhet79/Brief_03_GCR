async function getListFilms() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjViOWQ4NTQzODM2OGYxMzg2OTc3MzlkMDY3NmU5MCIsInN1YiI6IjY1ZGI2NDU5ODI2MWVlMDE4NWMyZmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqaglO-GjtRSZOQomGgTqN6cuNF7LE1oecefis70Kds'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=primary_release_date.asc', options)
    .then(response => response.json())
    .then(response => response.results)
    .then(movies => {
      console.log(movies);
      return movies
    })
    .then(movies => movies.forEach(createFilmInDOM))
    .catch(err => console.error(err));
}

function createFilmInDOM(movie) {
  console.log(movie)
  const dest = document.querySelector('.film-grid')
  let movieTitle = document.createElement('h2')
  movieTitle.innerText = movie.title
  dest.appendChild(movieTitle)
  let movieOverview = document.createElement('p')
  movieOverview.innerText = movie.overview
  dest.appendChild(movieOverview)
  let moviePoster = document.createElement('img')
  const image = movie.poster_path
  moviePoster.src = "https://image.tmdb.org/t/p/w500" + image
  dest.appendChild(moviePoster)
}

getListFilms()

// main()

// window.addEventListener('load', main)






//=========================================== Exercice de lundi matin à partir du json =======//
// for (i=0; i<movies.length; i++) {

//   /* afficheage du Titre dans "article" de la "section" */

//   let movieTitle = document.createElement('h2')
//   movieTitle.innerText = movies[i].title
//   articleTitle.appendChild(movieTitle)

//   /* afficheage du poster dans "article" de la "section" */

//   let moviePoster = document.createElement('img')
//   /* version 1*/
//   // const image_url = new URL(`https://image.tmdb.org/t/p/w500${movies[i].poster_path}`)
//   // moviePoster.src = image_url

//   /* version 2*/
//   const image = movies[i].poster_path
//   moviePoster.src = "https://image.tmdb.org/t/p/w500" + image
//   articleTitle.appendChild(moviePoster)

//   /* afficheage du résumé dans "article" de la "section" */

//   let movieOverview = document.createElement('p')
//   movieOverview.innerText = movies[i].overview
//   articleTitle.appendChild(movieOverview)

// }



