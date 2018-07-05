var para = document.querySelector('p');
console.log(para);
para.addEventListener('click', updatename);

function updatename(){
var name = prompt("Enter name");
para.textContent='User:' +name ;

}


var a = {
firstname :['shantanu','abhishek','mahesh','sumit'],
lastname:['gade','khutwad','auti','bobade']

}

console.log(a.firstname[2]);