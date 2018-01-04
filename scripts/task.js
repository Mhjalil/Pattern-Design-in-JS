

//var task = {};
//var task = Object.create(Object.prototype);

var task = {
    title: 'My Title',
    description: 'My Description'
};

/* task.title = 'My Title';
task.description = 'My Description'; */

/* task.toString = function(){
    return this.title + ' ' + this.description;
} */

Object.defineProperty(task, 'toString', {
    value:task.toString = function(){
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

//task.toString = 'hi';


//console.log(task.toString());
//console.log(Object.keys(task));

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
    value:task.toString = function(){
        return this.title + ' ' + 'is urgent';
    },
    writable: false,
    enumerable: false,
    configurable: false
});
console.log(urgentTask.toString());



