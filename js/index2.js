let movie_id = new URL(document.location.href).searchParams.get('id')
let array = []

function createFilmInDOM(movie){
    const titre = document.querySelector('h1');
    const film = document.querySelector('.film-details');
    const affiche = document.querySelector('#affiche');
    const synopsis = document.querySelector('#synopsis') 
    const distribution = document.querySelector('#distribution') 
    // console.log(movie);
    titre.innerText = movie.title
    const image = movie.poster_path
    affiche.src = "https://image.tmdb.org/t/p/w500" + image
    synopsis.innerText = movie.overview
}

function createPopulars(array){
    const recommend = document.querySelector('.scroll-container')
    for (i=0; i<array.length; i++) {
        let moviePoster = document.createElement('img')
        const affiche2 = array[i].poster_path
        moviePoster.src = "https://image.tmdb.org/t/p/w500" + affiche2
        recommend.appendChild(moviePoster)
    }
}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjViOWQ4NTQzODM2OGYxMzg2OTc3MzlkMDY3NmU5MCIsInN1YiI6IjY1ZGI2NDU5ODI2MWVlMDE4NWMyZmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqaglO-GjtRSZOQomGgTqN6cuNF7LE1oecefis70Kds'
    }
};
  
fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=fr-FR`, options)
    .then(response => response.json())
    // .then(response => console.log(response)) 
    .then(movie => createFilmInDOM(movie))
    .catch(err => console.error(err))

    
fetch(`https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1`, options)
    .then(response => response.json())
    // .then(response => console.log(response)) 
    .then(response => response.results)
    .then(array => Array.from(array))
    .then(array => createPopulars(array))
    .catch(err => console.error(err))
    .then(array => console.log(array))






  