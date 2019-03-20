function Controller(){
    this.model = new Model();
    this.addTodo = function(caption,isCompleted){
        this.model.addtodo(caption,isCompleted);
    };

    this.attachEventListener = function()
    {
            var inputtodo = document.querySelector('.todoinput');
            var self = this;
            inputtodo.onkeypress = function(event)
            {
                if(event.keyCode == 13)
                    {
                        if(inputtodo.value != "")
                            {
                                self.addTodo(inputtodo.value,false);
                                self.render();
                                inputtodo.value = "";
                            }
                    }
            };
    };

    this.render = function()
    {
        this.attachEventListener();
        
        var self = this;
        var list = document.querySelector('.todolist');
        list.innerHTML = "";
        for(var i in this.model.todoCollection) 
        {
            var todoitem = this.model.todoCollection[i];
            
            var li = document.createElement('li');
            li.setAttribute("class","listitem");
            
            li.onmouseenter = function(event) {
            event.target.lastElementChild.style.display = "block";
            };
            li.onmouseleave = function(event) {
            event.target.lastElementChild.style.display = "none";
            };
            
            
            var cb = document.createElement("input");
            cb.type = "checkbox";
            cb.setAttribute("class", "status");
            
            if(todoitem.isCompleted) 
            {
                cb.setAttribute("checked", "true");
            }
            
            cb.onclick = function(index, event) 
            {
                self.model.toggle(index);
                self.render();
            }.bind(null, i);
            
            li.append(cb);
            
            var span = document.createElement('span');
            span.innerHTML = todoitem.caption;
            span.setAttribute("class","sp");
            
             if(todoitem.isCompleted)
            {
                span.classList.add("strike");
            }
            
            span.addEventListener('dblclick',function()
            {
                var oldtxt = this.textContent;
                var inbox = this.parentNode.childNodes[2];
                inbox.style.display = "inline";
                inbox.focus();
                this.style.display = "none";
                inbox.setAttribute("value",oldtxt);
                
            });
            li.append(span);
            
            
            var inputbox = document.createElement('input');
            inputbox.setAttribute("type","text");
            inputbox.setAttribute("class","edit");
            inputbox.style.display = "none";
            
            inputbox.onkeypress = function(index, event) {
                var x = event.target;
                if (event.keyCode == 13) {
                if (x.value == "") {
                self.model.removetodo(index);
                }
                else {
                    self.model.edit(index, x.value);
                }
                self.render();
            }
            }.bind(null, i);
            inputbox.onblur = function(index, event) {
              var x = event.target;
                if (x.value == "") {
                self.model.removetodo(index);
                }
                else {
                    self.model.edit(index, x.value);
                }
                self.render();
            }.bind(null, i);
            li.append(inputbox);
            
            var cross = document.createElement("span");
            cross.innerHTML = "X";
              cross.setAttribute("class", "cross");
              cross.onclick = function(index, event) {
                self.model.removetodo(index);
                self.render();
              }.bind(null, i);

              li.appendChild(cross);
                list.appendChild(li);
            
        }
    }
}