import view from './view.js'
function app(){
    console.log(1)
    const stateInit = {
        movies: [],
        error: ''
    }
    const elements = {
        button: document.querySelector('.input>button'),
        input: document.querySelector('.search')
    }
    const watch = view(stateInit,elements)
    elements.button.addEventListener('click', function(){
        fetch('http://www.omdbapi.com/?apikey=&s=spider')
            .then(function(response){return response.json()})
            .then(function(movies){console.log(movies)})
            .catch(function(error){console.log('ошибка')})
    })
}
app()
