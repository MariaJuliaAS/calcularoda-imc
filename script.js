var peso;
var altura;
var imc;
var resultado;


function calcular(event){
    event.preventDefault(); //faz com que os dados n sejam apagados
    
    peso = document.getElementById('peso').value; //vai pegar o valor digitado no peso (pegou pelo id)
    altura = document.getElementById('altura').value; 

    imc = peso / (altura * altura);

    resultado = document.getElementById('resultado');

    if(imc < 17){
        resultado.innerHTML = '<br> Seu IMC é: ' + imc.toFixed(2) + '<br> Cuidado, você está muito abaixo do peso. 😰'
    }else if(imc > 17 && imc <= 18.49){
        resultado.innerHTML = '<br> Seu IMC é: ' + imc.toFixed(2) + '<br> Você está abaixo do peso. 😬'
    }else if(imc >= 18.5 && imc <= 24.99){
        resultado.innerHTML = '<br> Seu IMC é: ' + imc.toFixed(2) + '<br> Seu peso está ideal. 🤙'
    }else if(imc >= 25 && imc <= 29.99){
        resultado.innerHTML = '<br> Seu IMC é: ' + imc.toFixed(2) + '<br> Você está acima do peso. 😬'
    }else if(imc >= 30){
        resultado.innerHTML = '<br> Seu IMC é: ' + imc.toFixed(2) + '<br> Cuidado, obesidade. 😰'
    }
    
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';

}
//toFixed(2) | está falando que quer apenas duas casa decimais