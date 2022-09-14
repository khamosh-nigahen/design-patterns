/*

Builder Pattern

"produces different types and representations of an object using the same contruction process" - look at ex2.js

The Builder pattern is used to create objects in "steps". 
Normally we will have functions or methods that add certain properties or methods to our object.

The cool thing about this pattern is that we separate the creation of properties and methods into different entities.

If we had a class or a factory function, 
the object we instantiate will always have all the properties and methods declared in that class/factory. 
But using the builder pattern, we can create an object and apply to it only the "steps" we need, which is a more flexible approach.

*/

/**
 * builder is a similar concept on object composition
 * understand object composition : https://www.freecodecamp.org/news/object-oriented-javascript-for-beginners/#object-composition
 * 
 */