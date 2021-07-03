// var val = document.getElementById('input');
// var ol= document.getElementById('ol');
// function add(){
//     var li =document.createElement('li');
//     var input = document.createElement('input')
//     input.setAttribute('type', 'text');
//     input.setAttribute('value',val.value );
//     input.setAttribute('disabled', 'disabled');
// li.appendChild(input);
// ol.appendChild(li);
//     input.value = "";
// //   var litext= document.createTextNode(input.value);
// //   li.appendChild(litext)
// //   ol.appendChild(li)
// //     input.value=""


//     var edit=document.createElement('button');
// var editbtntext= document.createTextNode("Edit");
// edit.appendChild(editbtntext);
// li.appendChild(edit)
// edit.setAttribute('onclick',"edittodo(this)")


// var delet=document.createElement('button');
// var deletbtntext= document.createTextNode("Delete");
// delet.appendChild(deletbtntext);
// li.appendChild(delet)
// delet.setAttribute('onclick',"delettodo(this)")

// }
// function delettodo(e){
//     e.parentNode.remove();
// }
// function edittodo(e){
//     if(e.innerText === 'Edit Todo'){
//         e.parentNode.firstChild.disabled=false;
//         e.innerText='update'
//         }else{
//             e.parentNode.firstChild.disabled=true;
//             e.innerText='Edit Todo'
//         }

// }

// function deleteall(){
//     ol.innerHTML=""
// }
function add() {
    var val = document.getElementById("input");
    var list = document.getElementById('list');
    var li = document.createElement('li');
    var input = document.createElement('input')
    input.setAttribute('type', 'text');
    input.setAttribute('value',val.value );
    input.setAttribute('disabled', 'disabled');
li.appendChild(input);
list.appendChild(li);
    val.value = "";









    var dltbtn = document.createElement('button');
    var dlttext = document.createTextNode("DELETE TODO");
    dltbtn.setAttribute("onclick", 'dlttodo(this)')
    dltbtn.appendChild(dlttext);
    li.appendChild(dltbtn);




    var editbtn = document.createElement('button');
    var edittext = document.createTextNode("Edit Todo");
    editbtn.setAttribute('onclick', 'edittodo(this)')
    editbtn.appendChild(edittext);
    li.appendChild(editbtn)


}


function delet() {
    list.innerHTML = ""
}

function dlttodo(li) {
    li.parentNode.remove()
}
function edittodo(e) {
console.log(e.innerText)
if(e.innerText === 'Edit Todo'){
e.parentNode.firstChild.disabled=false;
e.innerText='update'
}else{
    e.parentNode.firstChild.disabled=true;
    e.innerText='Edit Todo'
}
}