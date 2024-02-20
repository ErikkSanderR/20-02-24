import {
    txtLogin,
    txtSenha
} from '../App';

export const fazerLogin = (e) => {
var login = "teste";
var senha = "teste";


// var txtLogin = document.getElementById("txtLogin");
//  var txtsenha = document.getElementById("txtsenha"); 


if(txtLogin.current.value == login && txtSenha.current.value == senha){
    console.log("acesso liberado");
    } 
    else
     {
        console.log("Login ou senha inválidos");
    }
    return true;
}