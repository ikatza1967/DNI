let Dni= document.getElementById("Dni");
let comprobar=document.getElementById("comprobar");
comprobar.addEventListener('click', comp);

function comp(){
    let valordni =Dni.value;
    let numero=valordni.slice(0,8);
    console.log(numero)
    let letra=valordni.slice(8,9).toUpperCase();
    console.log(letra);
    let cadena=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"]

    if (isNaN(numero)|| !isNaN(letra)){
        alert(`introduce un numero de 8 digitos y una letra`);
    }else{
        let resultado=parseInt(numero) % 23;
        console.log(resultado);
        if (cadena[resultado]==letra){
            alert(`el dni es corrrecto`)
        }else{
            alert("la letra es incorrecta,la letra correcta para "+ numero +" es:"+cadena[resultado])

        }
    }
}

