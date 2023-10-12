// Url general
const urlBasic = 'https://rickandmortyapi.com/api'
const Allcharacters = 'https://rickandmortyapi.com/api/character/'
const urlIMG = 'https://rickandmortyapi.com/api/character/avatar/'
const contenedor = document.querySelector('main')
const formulario = document.querySelector('.form')
const buscar = document.querySelector('.buscar')



verPeronajes(Allcharacters)


function verPeronajes(url) {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos.results)
            imprimirPersonajes(datos.results)
        })
        .catch(err => console.log(err))
}


function imprimirPersonajes(datos) {
    datos.forEach(tarjeta => {
        const { id, name, species, created, gender, origin, status, type } = tarjeta
        const elementPersonaje = document.createElement('div')
        elementPersonaje.classList.add('tarjeta')
        exist = type == '' ? "Unknown" : type
        elementPersonaje.innerHTML = `<img src="${urlIMG + id + ".jpeg"}" alt="${name}">
        <div class="infoPers">
            <h2 class="Nombre">${name}</h2>
            <span class="especie">${species}</span>
        </div>
        <div class="datos">
            ${"ID: " + id + "<br>Created: " + created + "<br>Gender: " + gender + "<br>Origin: " + origin.name + "<br>Status: " + status + "<br>Tipo: " + exist}
        </div>`
        contenedor.appendChild(elementPersonaje)
    })

}

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const busqueda = buscar.value
    console.log(busqueda)
    const urlBuscar = `${Allcharacters}?name=${busqueda}`

    if (busqueda) {
        contenedor.innerHTML = '';
        verPeronajes(urlBuscar)
    }


})