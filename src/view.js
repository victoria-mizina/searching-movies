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
    const div = document.querySelector('.movies')
    
}
export default view