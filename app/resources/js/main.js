var thing = document.getElementById('thing'),
    done_list = document.getElementById('done'),
    undone_list = document.getElementById('undone');


document.getElementById('add').addEventListener('click', add_item);

// Trigger button click by pressing 'Enter' on keyboard
document.getElementById('thing').addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById('add').click();
  }
});


function add_item(){
   if(thing.value){
        add_todo(thing.value);
       //clear text field and bring focus back in case of clicking away
        thing.value = "";
        thing.focus();
   }
}

function delete_item(){
    var thing = this.parentNode.parentNode;
    var parent = thing.parentNode;
    parent.removeChild(thing);
}

function done_item(){
    var thing = this.parentNode.parentNode;
    var parent = thing.parentNode;
    
    if(parent.id==='done')
        var moveTo = document.getElementById('undone');
    else 
        var moveTo = document.getElementById('done');

    parent.removeChild(thing);
    moveTo.appendChild(thing);
}




function add_todo(value){
    
    var node = document.createElement("li"), 
        textnode = document.createTextNode(value); 

    var delBtn = document.createElement('button');
        delBtn.classList.add('remove');
        delBtn.innerHTML = '✕';
    
    var doneBtn = document.createElement('button');
        doneBtn.classList.add('done');
        doneBtn.innerHTML = '✓';
    
    var btn = document.createElement('div');
        btn.classList.add('btn');
    
    //Events for new buttons
    delBtn.addEventListener('click', delete_item);
    doneBtn.addEventListener('click', done_item);
    
    
    btn.appendChild(delBtn);
    btn.appendChild(doneBtn);
    
    node.appendChild(btn);
    node.appendChild(textnode);
    undone_list.appendChild(node);
}



/*
// https://www.w3schools.com/jsref/met_node_appendchild.asp
// moving item between lists

var node = document.getElementById("myList2").lastChild;
document.getElementById("myList1").appendChild(node);

*/