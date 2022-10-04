window.onload = function(){
    let select = document.querySelector('select');
    select.addEventListener ('change', function(){
        let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;
    
    })


    let imputfontSize = document.querySelector('input')
    imputfontSize.addEventListener('change',function(){
    let p = document.querySelector('p');
        p.style.fontSize = `${imputfontSize.value}px`;
        
    })

}


// variaveis globais









// funções












// chamando funções

