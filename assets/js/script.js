let span1 = document.createElement('span'); //'<span class="form__area--box_legend-title">Telefone, nome de usuário ou email</span>';
span1.className = "form__area--box_legend-title";
span1.textContent = "Telefone, nome de usuário ou email"
span1.id = 'span-1';
let span2 = '<span class="form__area--box_legend-title">Senha</span>';
let botao = '<a href="" class="form__area--box_legend-button">Mostrar</a>';
let legenda1 = document.getElementById('legend-box-1');
let box1 = document.getElementById('box-1');
let email = document.getElementById('email');

let mudaCaixaEmail = ()=>{
    if(email.value == ''){
        box1.className = 'form__area--box-1';
        email.className = 'form__area--box_legend-input-3';
        legenda1.removeChild(span1)
    }else{
        box1.className = 'form__area--box';
        legenda1.insertBefore(span1, email);
        let recuperaSpan = document.getElementById('span-1')
        email.className = 'form__area--box_legend-input-1';
    }
}


email.addEventListener('input', mudaCaixaEmail);