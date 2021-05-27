

var username= document.getElementsByName('username'); 
var name = username1[0].value ; 

var pwd= document.getElementsByName('password');
var pass=  pwd[0].value ; 
var username1= document.getElementsByName('username1'); 
var email= document.getElementsByName('email'); 
var pwd1= document.getElementsByName('password1');
var address= document.getElementsByName('address');
var bithdate= document.getElementsByName('bithdate');

function validateSub(){
	event.preventDefault();
alert(username1[0].value);
}

var nameB= document.getElementsByName('nameB'); 
var phone= document.getElementsByName('phone'); 
var emailB= document.getElementsByName('emailB'); 
var nbr= document.getElementsByName('nbr'); 
var date= document.getElementsByName('date'); 



function validatebook(){
	event.preventDefault();
cuteAlert({
  type: "success",
  title: "Success Title",
  message: "Success Message",
  buttonText: "Okay"
})

	
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;


document.getElementsById('date').setAttribute('min', today);


