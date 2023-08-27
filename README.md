# Javascript30 #

https://courses.wesbos.com/account/access/64eb4025119d0f571e0ca25a/view/194130650

## Day 1 ##

First day of the course we build a drum kit, which basically consists of keys that if you press they emmit a different sound effect.

Concepts of this first day: 

- event listeners
    
Event listeners are functions in javascript that "listen" for specific events to occur in the HTML elements and then trigger a response or action

Example:

```javascript
    const button = document.querySelector('#myButton');
    
    button.addEventListener('click', () => {
        console.log('Button clicked');
    }
```

- this

In javascript `this` referes to the context in which a function is executed. The value of `this` depends on how the function is called and where it's defined.

When used in an object method, it refers to the object itself.

Example:

```javascript
    const person = {
        name: 'John',
        greet: function () {
            console.log(`Hello, ${this.name}`);
        }
    }

    person.greet();
```

In event handlers, `this` refers to the DOM element that triggered the event.
Example:
```javascript
    const button = document.querySelector('#myButton');

    button.addEventListener('click', function () {
        console.log(this.textContent);
    });
```

Arrow functions behave differently with `this`. In arrow functions, `this` retains the value from the outer context.
Example:

```javascript
    const Person = {
        name: 'John',
        greet: function () {

            setTimeout(() => {
                console.log(`Hello, ${this.name}`);
            }, 1000);
        }
    }
```

If we used a normal function, the `this` context would be of the setTimeout, since we use a arrow function it perserve the context of the object Person.


- queryselectors

Query selector are used to select HTML elements from the DOM (Document Object Model) using Css style selectors. They allow to manipulate and interact with these elements using javascript, the quer

    data-key:

    classList:


## USEFUL LINKS ##


## USEFUL FUNCTIONS ##

