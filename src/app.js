import 'dotenv/config'
import view from './view.js'
const API_KEY = process.env.API_KEY
function app(){
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
        const input = elements.input.value
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${input}`)
            .then(function(response){return response.json()})
            .then(function(movies){
                watch.movies = movies.Search
            })
            .catch(function(error){console.log('ошибка')})
    })
}
app()
