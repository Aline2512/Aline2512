const API_KEY = 'lien';
const BASE_URL ='lien data api souhaiter';
const API_URL + 'lien movie the most populary'+ API_KEY;


getMovies(url);
function getMovies (url) {
    fetch (url).then(res => res.json()).then(data => {
        showMovies(data.results);

    }  )
}
function showMovies(data){
    data.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML ='
        
        
        
    });
}
