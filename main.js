document.addEventListener("DOMContentLoaded", function () {
    // Attendi che l'iframe del calendario sia completamente caricato
    var checkExist = setInterval(function () {
        var iframe = document.querySelector("iframe");  // Assicurati che questo selettore colpisca l'iframe desiderato
        if (iframe && iframe.style) {
            clearInterval(checkExist);
            iframe.style.width = '100%';  // Imposta la larghezza
            iframe.style.height = '500px';  // Imposta un'altezza fissa se necessario
        }
    }, 100);  // Controlla ogni 100ms
});
