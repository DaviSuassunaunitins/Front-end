function procurarCep() {
    const numCep = document.getElementById("numCep").value.trim()

    if (isNaN(numCep)) {
        document.getElementById("Log").innerText = "Digite um valor válido"
    }
    else {
        fetch(`https://viacep.com.br/ws/${numCep}/json/`)
    
        .then(response => {
            return response.json();
        })
        
        .then(dados => {
            document.getElementById("Log").innerText = "Logradouro/Nome"
            document.getElementById("valueLog").innerText = dados.logradouro + " - " + dados.complemento
            document.getElementById("Bairro").innerText = "Bairro/Distrito" 
            document.getElementById("valueBairro").innerText = dados.bairro
            document.getElementById("Local").innerText = "Localidade/UF"
            document.getElementById("valueLocal").innerText = dados.localidade + "/" + dados.uf
            document.getElementById("Cep").innerText = "CEP"
            document.getElementById("valueCep").innerText = dados.cep
        })
        
        .catch(erro => {
            
        })
    }
}