import cipher from './cipher.js';

//cipher.encode(1,"abc")
document.getElementById("code").addEventListener("click", function(){
    let ceaserNum = document.getElementById("ceaserNum").value;

    let codeMessage = document.getElementById("codeMessage").value;

    let resultado = cipher.encode(ceaserNum, codeMessage);

    document.getElementById ("resultado").innerHTML = resultado;
})

document.getElementById("decode").addEventListener("click", function(){
    let ceaserNum = document.getElementById("ceaserNum").value;

    let codeMessage = document.getElementById("codeMessage").value;

    let resultado = cipher.decode(ceaserNum, codeMessage);

    document.getElementById ("resultado").innerHTML = resultado;
})