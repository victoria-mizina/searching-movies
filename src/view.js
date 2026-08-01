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
        const title = document.createElement('h2')
        const type = document.createElement('p')
        const year = document.createElement('p')
        const poster = document.createElement('img')
        const divMovie = document.createElement('div')
        const innerContent = document.createElement('div')
        const typeYear = document.createElement('div')

        title.textContent = movie.Title
        type.textContent = movie.Type
        year.textContent = movie.Year
        poster.src = movie.Poster

        divMovie.append(poster, innerContent)
        divMovie.classList.add('movie')
        divMovies.append(divMovie)
        innerContent.append(title,typeYear)
        innerContent.classList.add('inner-content')
        typeYear.append(type, year)
        typeYear.classList.add('type-year')



    }
}
export default view