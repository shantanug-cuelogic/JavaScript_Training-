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

var d = new Date();

document.getElementById('date').innerHTML = d;



var test ={
    
    prop1:'123',
    prop2:'456',
    prop3:'789'
}

var test1 ={
    prop1:'123',
    prop3:'789',
    prop2:'456'
    
}



function isequal(){
var x= Object.getOwnPropertyNames(test);
var y= Object.getOwnPropertyNames(test1);
        if(x.length!=y.length)
        {
            return false
        }
        var len = x.length;
        for(var i=0;i<len; i++)
        {
            var pname=x[i];
           if(test[pname]!=test1[pname])
           {
               return false
           }

        }
        return true;
}

console.log(isequal(test,test1));

console.log(Object.keys(test));// return array of property name
console.log(Object.values(test));// return array of values

console.log(test.hasOwnProperty('prop4'));

test.prop4=101112;

console.log(test.hasOwnProperty('prop4'));


function checkfunc(){
    
    var message= document.getElementById('res');
    message.innerHTML="";
    var inp = document.getElementById('check').value;
    try{
        if(inp=="") throw "Empty";
        if(isNaN(inp)) throw "Not a Number";
        inp=Number(inp);
        if(inp<5) throw "Too small";
        if(inp>100000) throw "Too Big";
    }
    catch(err)
    {
        message.innerHTML="input is" + err;
    }


}


var myobj={
    "Name":"Shantanu",
    "Email":"shantanu.gade@cuelogic.com",
    "Phone":8087770654
}

var myjson = JSON.stringify(myobj);

localStorage.setItem("data",myjson);

var text=localStorage.getItem("data");
var obj=JSON.parse(text);
document.getElementById('lsdata').innerHTML=obj.Name;
