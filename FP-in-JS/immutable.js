// We can use Object.freeze() to freeze a object

// Create an object that has two properties.
var obj = { pasta: "spaghetti", length: 10 };

// Freeze the object.
Object.freeze(obj);

// Now we can not change add delete properties for obj
