console.log("Iniziamo")

console.log(Date.now())

function getId(id) {
    return document.getElementById(id)
}

function addClasse(elemento, classe) {
    elemento.classList.add(classe);
}

function creaElemento(elemento) {
    return document.createElement(elemento)
}

function creaTr() {
    return document.createElement("tr")
}

function creaTd() {
    return document.createElement("td")
}

function stampaOggetti(tab, tr, td1, td2, td3, td4) {
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tab.after(tr);
}

function cancellaElementi() {
    getId("prodotto").value = '';
    getId("qty").value = '';
    getId("costo").value = '';
}


function aggiungi() {
    console.log ("Aggiungiamo");

    const prodotto = getId('prodotto').value;
    const qta = getId("qty").value;
    const costo = getId("costo").value;
    const costoTotale = costo * qta + " \u20AC"

    if (prodotto == '' || qta == '' || costo == '') {
        alert("Tutti i campi devono essere pieni!");
    }
    else if (qta < 1){
        alert("La quantità non può essere minore di 1");
    }
    else if(costo < 0) {
        alert("Il costo non può essere minore di 0");
    }
    else {
        const tabella = getId("dopo");

        let tr = creaTr();

        let tdProdotto = creaTd();
        tdProdotto.innerText = prodotto;

        // colonna qta

        let tdQta = creaTd();
        let modificaQta = creaElemento('input');
        modificaQta.type = 'number';
        modificaQta.value = qta;

        modificaQta.addEventListener(change, sommaSingolo)

        let tdCosto = creaTd();
        tdCosto.innerText = costo

        let tdCostoTotale = creaTd();
        addClasse(tdCostoTotale, 'importo')
        tdCostoTotale.innerText = costoTotale;

        // Bottone elimina

        const iconElimina = creaElemento('span');
        iconElimina.innerText = 'remove_shopping_cart';

        stampaOggetti(tabella, tr, tdProdotto, tdQta, tdCosto, tdCostoTotale)
    }

    cancellaElementi()
}