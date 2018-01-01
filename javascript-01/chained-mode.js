/**
 * Created by kong90 on 16-5-18.
 */

function Person(name){
    this.name = name;

    this.sayName = function(){
        console.log("name: " + this.name);
        return this;
    }

    this.changeName = function(name){
        this.name = name;
        return this;
    }
}

var klx = new Person("klx");
klx.sayName().changeName("zlj").sayName()
