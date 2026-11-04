function add_line_table() {
    const table = document.getElementById("tabella");
    const cognomeStr = document.getElementById("cognome").value;
    const mediaNum = document.getElementById("media").value;

    const tr = document.createElement("tr");
    const tdCognome = document.createElement("td");
    const tdMedia = document.createElement("td");

    tdCognome.innerText = cognomeStr
    tdMedia.innerText = mediaNum

    tr.append(tdCognome);
    tr.append(tdMedia);
    table.append(tr);
}

function linee_colorate() {
    const table = document.getElementById("tabella");
    const linee = table.children;

    for (let i = 1; i < linee.length; i++) {
        const lineeColorate = linee[i];

        if (i %2 == 0) {
            lineeColorate.classList.add("blue");
        } else {
            lineeColorate.classList.add("rosso");
        }
    }
}