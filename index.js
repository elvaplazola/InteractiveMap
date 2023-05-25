function main(){
    console.log('test page working')
}
main()

async function getCoords(){
    let position = await new Promise((resolve,reject) => {
    navigator.geolocation.getCurrentPosition(resolve,reject)
})
    return [position.coords.latitude, position.coords.longitude]
}
let myMap = {
    location: [],
    map:{},
    markers: {},
}

buildMap() {
    this.map= L.map('map', {
        center: this.location,
        zoom: 11, 
    })
};

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
    }).addTo(this.map)

    const marker = L.marker(this.location).addTo(this.map),

    window.onload = async () => {
        const coords = awair getCoords()
        console.log(coords)
        myMap.location = coords
        myMap.buildMap()
    }

    document.getElementById('submit').addEventListener('click', async (event)=> {
        event.preventDefault()
        let userSelection = document.getElementById('business').value 
        console.log(userSelection)
    })