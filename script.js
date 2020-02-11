var val = document.querySelector("#number");

function validateForm() {
    var valor = val.value;

    if(valor.length > 2) {
        alert("O número precisa ter apenas 2 algarismos. Tente novamente!")
        val.value = '';
        return false;
        
    } else {
        return true;
    }
}