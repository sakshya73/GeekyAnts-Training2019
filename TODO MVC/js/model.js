function todoItem(caption,isCompleted) {
    this.caption = caption;
    this.isCompleted = isCompleted;
    
    this.toggle = function() {
        this.isCompleted = !this.isCompleted;
    }
}

function Model()
{
    this.todoCollection = [];
    
    
    this.addtodo = function(caption,isCompleted){
        var todo = new todoItem(caption,isCompleted);
        this.todoCollection.push(todo);
    };
    
    this.removetodo = function(index){
        this.todoCollection.splice(index,1);
    };
    
    this.toggle = function(index){
        this.todoCollection[index].toggle();
    };
    
    this.edit = function(index,newCaption){
        this.todoCollection[index].caption = newCaption;
    };
    
    this.findcaption = function(index){
        return this.todoCollection[index].caption;
    }
    
    this.findcompleted = function(index){
        return this.todoCollection[index].isCompleted;
    }
}