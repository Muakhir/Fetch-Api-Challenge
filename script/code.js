document.addEventListener('DOMContentLoaded', function () {
    let entryInput = document.querySelector('[data-entry]')
    let searchButton = document.querySelector('[data-search]')
    let cardContainer = document.querySelector('[data-cards]')

    function displayPeople(people) {
        people.forEach(person => {
            let personCard = document.createElement('div')
            personCard.classList.add('person-card')

            personCard.innerHTML = `
                <img src="${person.picture.thumbnail}" alt="Profile Picture">
                <p>Name: ${person.name.first} ${person.name.last}</p>
                <p>Email: ${person.email}</p>
                <p>Phone: ${person.phone}</p>
            `

            cardContainer.appendChild(personCard)
        })
    }

    function fetchAndDisplayPeople(searchTerm) {
        let url = `https://randomuser.me/api?results=20&nat=us`

        fetch(url)
            .then(response => response.json())
            .then(result => {
                let { results } = result
                if (results == '') {
                    displayError('No matching results found.')
                } else {
                    cardContainer.innerHTML = ''
                    displayPeople(results)
                }
            })
            .catch(error =>confirm(error))
    }

    fetchAndDisplayPeople()
    searchButton.addEventListener('click', function () {
        let searchTerm = entryInput.value
        cardContainer.innerHTML = ''
        fetchAndDisplayPeople(searchTerm)
    })
})

 
  
  
