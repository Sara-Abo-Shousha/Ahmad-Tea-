function ConfrimPassword(){

  var pass= document.getElementById("psswrd");
  var confirmpass= document.getElementById("cnfrmpass");


 if(pass.value != confirmpass.value){


    document.getElementById("message").innerHTML="*Passwords do not match";
    confirmpass.value="";
    event.preventDefault();

}
}


function PassLength(){

  var pass= document.getElementById("psswrd");
  


 if( pass.value.length < 8 ){


    document.getElementById("message").innerHTML="*Password should be at least 8 characters";
    pass.value="";
    event.preventDefault();

}
}


