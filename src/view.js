import onChange from 'on-change'
function view (state,elements){
    const watch = onChange(state,function(path, value){
        if (path === 'movies'){
            renderMovies(value)
        }
    })
    return watch
}
function renderMovies (movies){
    const divMovies = document.querySelector('.movies')
    divMovies.innerHTML = ''
    for(const movie of movies){
        const title = document.createElement('h1')
        const type = document.createElement('p')
        const year = document.createElement('p')
        const poster = document.createElement('img')
        const divMovie = document.createElement('div')

        title.textContent = movie.Title
        type.textContent = movie.Type
        year.textContent = movie.Year
        poster.src = movie.Poster

        divMovie.append(poster,title,type,year)
        divMovies.append(divMovie)



    }
}
export default view