var password = "grandescape"

function passcheck() {

if(document.getElementById('pass1').value != password)  { 
alert('WRONG PASSWORD, TRY AGAIN.');
return false
}

if(document.getElementById('pass1').value == password) {  
alert('Correct password. Please continue.');
}
}