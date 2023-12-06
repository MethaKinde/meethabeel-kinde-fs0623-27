const libriApiUrl = 'https://striveschool-api.herokuapp.com/books'
const eleBooksList = document.querySelector('#books')


fetch(libriApiUrl)
    .then(response => response.json())
    .then((data) => {
        console.log(data)

        const books = data
        console.log(books)
        //ciclare sull'array dei libri e per ognuno ottenere
        //il nome, il prezzo e l'imaggine
        let htmlListContent = ''
        books.forEach((book) => {
            htmlListContent += `<div class="col-12 col-xs-6 col-md-4 col-lg-3 mb-2">
            <div class="card" >
                <img src="${book.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">price:<strong class="bookprice">${book.price}</strong>$</p>
                    <a href="#" class="btn btn-primary scarta-btn">Scarta</a>
                    <a href="#" class="btn btn-primary">Compra ora</a>
                </div>
              </div>
        </div>`
        })
        eleBooksList.innerHTML = htmlListContent

        //elimina i libri scartati
        const scartaButtons = document.querySelectorAll('.scarta-btn');
        scartaButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Rimuovi il genitore della card quando viene cliccato "Scarta"
                this.closest('.col-12').remove()
            })
        })
    })
    .catch(error => console.error('Error fetching data:', error))