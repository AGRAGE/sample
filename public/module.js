//это модуль! Он нужен, чтобы создать класс, описать его, обернуть в функцию и сразу выполнить при вызове

(function () {
  'use strict';

  // Class

  class Animal{
    constructor (options){
      this.name = options.name;
      console.log('Creating new instance!');
    }

    sayHello(){
      console.log(`Hello! I am ${this.name}`); //тут специфичные шаблоны и кавычки
    }
  }

  class Dog extends Animal {
    constructor (options){
      super(options); //упоротое наследование, прочитать про super!!!
    }

    bark(){
      super.sayHello();
      console.log('Woof-Woof');
    }

    static catchDog(dog){
      Dog._instances.push(dog);
    }
  }
  /*let bob = new Dog({
    name: 'Bob'
  })
  bob.bark();
  */
  Dog._instances = [];

  let animal = new Animal({
    name: 'Bob'
  })

  animal.sayHello();

  let dog = new Dog({
    name: 'Bob'
  });

  Dog.catchDog(dog);
  Dog.someField;
  dog.name;
  dog.bark();

})(); //столько скобок нужно чтобы сразу вызвать фунцию

//document.QuerySelector
//h3.innerHTML
//h3.textContent
//h3.style.color = 'red';
//QuerySelectorAll (коллекция)
/*h3.addEventListener('click', function(event){
  console.log('Click on', event);
}, true);
})*/
//bubling
