function MyTest(name, gender){

   // Add object properties like this
   this.name = name;
   this.gender = gender;
}

// Add methods like this.  All Person objects will be able to invoke this
MyTest.prototype.speak = function(){
    return "Howdy, my name is" + this.name;
};

module.exports = MyTest