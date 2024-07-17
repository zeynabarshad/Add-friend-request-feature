var estatus=document.querySelector("h5");
var add=document.querySelector("#Add");
var flag=0;

//var remove =document.querySelector("#remove");
add.addEventListener("click", function(){
    if (flag==0){
         estatus.innerHTML="Friends"
    estatus.style.color= "green"
        add.innerHTML="Remove Friend"
    flag=1
    }
else{
   estatus.innerHTML="Strangers"
    estatus.style.color= "red"
    add.innerHTML="Add Friend"
    
    flag=0
}

})
/*
add.addEventListener("click" ,function(){
    estatus.innerHTML="Friends"
    essstatus.style.color= "green"
})*/