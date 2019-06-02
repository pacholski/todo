var thing = document.getElementById('thing'),
    done_list = document.getElementById('done'),
    undone_list = document.getElementById('undone');


document.getElementById('add').addEventListener('click', add_item);

function add_item(){
   if(thing.value){
        add_todo(thing.value);
       //clear text field and bring focus back in case of clicking away
        thing.value = "";
        thing.focus();
   }
}

function add_todo(v){
    var node = document.createElement("li"), 
        textnode = document.createTextNode(v); 
    node.appendChild(textnode);
    undone_list.appendChild(node);
}



/*
// https://www.w3schools.com/jsref/met_node_appendchild.asp
// moving item between lists

var node = document.getElementById("myList2").lastChild;
document.getElementById("myList1").appendChild(node);

*/