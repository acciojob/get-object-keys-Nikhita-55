//your JS code here. If required.
// Create the student object with a name property
let student = {
    name: "John Doe"
};

// Add the getKeys method to Object.prototype
Object.prototype.getKeys = function() {
    // Return an array of keys from the current object
    return Object.keys(this);
};

// Test the getKeys method
console.log(student.getKeys()); // Output: ["name"]
