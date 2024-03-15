function verstuurBon() {
    var gekozenOptie = document.getElementById("options").value;

    if (gekozenOptie === "autre") {
        gekozenOptie = document.getElementById("autreOption").value;
    }

    var emailBericht = "Clotilde souhaite utiliser son Golden Ticket pour: " + gekozenOptie;
    window.location.href = "mailto:dportillobeckand@gmail.com?subject=Service Bon&body=" + emailBericht;
}
