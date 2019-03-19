input = document.querySelector('.task');

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        if(input.value !="")
            abc();
        input.value = "";
    }
});
listindex = 0;
function abc()
{

    list = document.querySelector('.list');

    var done = document.createElement('button');
    done.setAttribute("class","donebtn");
    
    var listele = document.createElement('li');
    listele.setAttribute("class","listitems");
    
    var del = document.createElement('button');
    del.setAttribute("class","delbtn");
    
    var inputdata = document.createElement('span');
    inputdata.setAttribute("class","inputdata");
    
    var textbox = document.createElement('input');
    textbox.setAttribute("type","text");
    textbox.setAttribute("class","ntxt");
    textbox.style.display = "none";
    
    
    var donetxt = document.createTextNode('done');
    var eletext = document.createTextNode(input.value);
    var deltxt = document.createTextNode('delete');
    
    inputdata.appendChild(eletext);
    done.appendChild(donetxt);
    del.appendChild(deltxt);

    listele.append(inputdata);
    listele.append(textbox);
    listele.append(done);
    listele.append(del);
    list.appendChild(listele);
    
    var span1 = document.querySelectorAll('.inputdata')[listindex];
    var listitems = document.querySelectorAll('.listitems')[listindex];
    var donebt = document.querySelectorAll('.donebtn')[listindex];
    var delbt = document.querySelectorAll('.delbtn')[listindex];
    
    
    donebt.addEventListener('click',function(){
        span1.classList.toggle('strike'); 
    });
    
    delbt.addEventListener('click',function(){
       list.removeChild(listitems);
        listindex--;
    });
    
    span1.addEventListener('dblclick',function(){
        var oldtxt = inputdata.textContent;
        textbox.style.display = "inline";
        inputdata.style.display = "none";
        textbox.setAttribute("value",oldtxt);
        
        textbox.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            textbox.style.display = "none";
            inputdata.style.display = "inline";
            if(textbox.value === "")
            {
                list.removeChild(listitems);
                listindex--;
            }
            else
                inputdata.textContent = textbox.value;
        }
});
        
        
    })
 listindex++;
}

