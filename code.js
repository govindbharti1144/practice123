let data =[1,2,3,4,5,6,7,8,9,0];
function getElement(){
    let el= document.getElementById('element').value;
    if(el<data.length && typeof parseInt(el)==="number"){
        alert(data[el])
    }else{
        alert("invalid input")
    }

}