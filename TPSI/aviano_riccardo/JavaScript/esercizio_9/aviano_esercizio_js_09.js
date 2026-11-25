function getId(elemento) {
    return document.getElementById(elemento)
}

function getTag (tag) {
    return document.getElementsByTagName(tag)
}

function addClasse(elemento, classe) {
    elemento.classList.add(classe);
}

function getClasse(classe) {
    return document.getElementsByClassName(classe)
}

function creaTr() {
    return document.createElement("tr")
}

function creaTd() {
    return document.createElement("td")
}

function stampaOggetti(tab, tr, td1, td2, td3, td4, td5) {
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    tab.after(tr);
}

function cancellaElementi() {
    getId("dipartimento").value = '';
    getId("cognome").value = '';
    getId("nome").value = '';
    getId("mese").value = '';
    getId("importo").value = '';
}

function aggiunta() {
    const dipartimento = getId("dipartimento").value;
    const cognome = getId("cognome").value;
    const nome = getId("nome").value;
    const mese = getId("mese").value;
    const importo = getId("importo").value;

    if (dipartimento == '' || cognome == '' || nome == '' || mese == ''|| importo == '') {
        alert("Compilare tutti i campi");
        console.log("Bisogna compilare tutti i campi");
    }
    else {
        let tabella = getId("dopo");
        let tr = creaTr();
        
        let tdDipartimento = creaTd();
        tdDipartimento.innerText = dipartimento;
        
        let tdCognome = creaTd();
        tdCognome.innerText = cognome;

        let tdNome = creaTd();
        tdNome.innerText = nome;

        let tdMese = creaTd();
        tdMese.innerText = mese

        let tdImporto = creaTd();
        addClasse(tdImporto, "importo");

        tdImporto.innerText = importo;

        stampaOggetti(tabella, tr, tdDipartimento, tdCognome, tdNome, tdMese, tdImporto)
    }

    cancellaElementi()
}

function sommaImporti() {
    let totale = 0;

    const corpoTabella = getId("corpoTabella");
    const figliTabella = corpoTabella.children;
    const fasciaTotale = getId("totale");

    if (figliTabella.length > 7) {
        const importi = getClasse("importo");

        for (let i = 0; i < figliTabella.length - 6; i++) {
            totale += Number(importi[i].innerText);
        }

        fasciaTotale.innerText = totale + " \u20AC";

        return totale
    }
    else {
        alert("Devono esserci almeno 2 importi!");
    }
}

function mediaImporti() {
    const totaleImporti = getId("corpoTabella").children.length - 6;
    const media = getId("media")
    
    if (totaleImporti >= 2) {
        media.innerText = sommaImporti() / totaleImporti + " \u20AC";
    }
    else {
        alert("Devono esserci almeno 2 importi")
    }
}