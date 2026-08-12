// console.log('hello');
// console.log(document.querySelector('h1').outerText);


// let title = document.querySelector('h1')
// console.log(title.textContent);

// let d = document.getElementById("myInput")

// for(let i =0; i<20; i++){
//     d.value += d.value = "נהוראי מגורי"
// }

const screnVal = document.getElementById('scren')

function calcfunc(sec){
    console.log(screnVal.value);
    
    console.log(screnVal.value.includes("Error!"));
    
    if (screnVal.value.includes("error!"))
        screnVal.value = ""
    screnVal.value += sec.textContent
    console.log(sec.textContent);
    
}

function deletefunc(){
    screnVal.value =""
}

function equalfunc(){
    try{
    screnVal.value =  eval(screnVal.value)
    }catch{
        screnVal.value = "error!"
    }
}