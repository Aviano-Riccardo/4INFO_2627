function modificaStile() {
    let t1livello = document.getElementsByTagName("h1")

    for (let i = 0; i < t1livello.length; i++) {
        let tprimo = t1livello[i]
        tprimo.style.backgroundColor = 'Red'
    }


}