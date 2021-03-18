# Variable Scope

A variable scope is the range or scope that a variable can be used within a project.
We have two levels of variable scopes. They are

- Global Scope
- Local Scope

# Global Scope

Global scope is when a variable is declared in the root program and can be called or used anywhere else within the program. It is usually declared outside a function.

# Local Scope

Local scope is when a variable is declared within a function and can only be used within the confines of that function. It can not be called outside the function

    For Example
    Let's look at this program:

    const playBook = 'Java Essential';
    // having a conditional statement within a function
    const allowance = (firstParam, secondParam) => {
        const result;
        if (firstParam > secondParam) {
            result = 'a > b';
        } else {
            result = 'a < b';
        }
        return result;
    }

In the example above, playbook is a global variable because it is declared outside a function and can be used anywhere in the program.

On the other hand, result is a local variable and can only be used within the function.

//using an object
const program = {
name: 'arithmetic computation',
use: 'to solve complex arithmetic problem',
model: 'V3',
developer: 'John McGinn',
}

"Program" here is a global variable because it can be used anywhere. However, the properties listed within are local variables because they can only be used within this object except they are declared with the global variable.
