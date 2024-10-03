function gerarlista() {
    let numero = document.getElementById("numero").value;
        
    let lista = document.getElementById("sequencia");
        
        let resultado = "Pablo Barros ";
        
        for (let i = 1; i <= numero; i++) {
            resultado += i + "<p></p> -Pablo Barros ";
        }
    sequencia.innerHTML = resultado;
}