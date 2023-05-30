const init = () => {
  const inputForm = document.querySelector('form')
    inputForm.addEventListener('submit', function (e) {
        e.preventDefault()
        const searchID = e.target.searchByID.value
        
        findAndDisplayMovieInfo(searchID)
        
    })
    
    function findAndDisplayMovieInfo(ID) {
        fetch(`http://localhost:3000/movies/${ID}`)
            .then((response) => response.json())
            .then((data) => {
                const title = document.querySelector('section#movieDetails h4')
                const summary = document.querySelector('section#movieDetails p')
                
                title.textContent = data.title
                summary.textContent = data.summary
            
                })
            
    }
}

document.addEventListener('DOMContentLoaded', init);