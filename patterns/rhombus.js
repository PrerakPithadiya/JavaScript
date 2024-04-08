// Prompt the user to enter the number of rows
let n = prompt("Enter the number of Rows : ");
let str;

// Loop through each row
for (let i = 1; i <= n; i++) {
    str = "";

    // Add spaces for indentation
    for (let j = 1; j <= i - 1; j++) {
        str = str + "  ";
    }

    // Add asterisks for the given row
    for (let j = 1; j <= n; j++) {
        str = str + "* ";
    }

    // Print the current row
    console.log(str);
}


// Explnation of the given code

// 1. `let n = prompt("Enter the number of Rows : ");`:
//    - This line prompts the user to enter the number of rows they want to generate for a pattern.
//    - The input value is stored in the variable `n`.
//    - `prompt()` is a function that displays a dialog box with a message asking the user for input.

// 2. `let str;`:
//    - Declares a variable `str` which will be used to store the string representation of each row of the pattern.

// 3. `for (let i = 1; i <= n; i++) { ... }`:
//    - This loop iterates through each row of the pattern, starting from 1 up to the value of `n` entered by the user.

// 4. `str = "";`:
//    - Resets the `str` variable to an empty string at the beginning of each iteration of the outer loop. This is done to clear the string representation of the previous row.

// 5. `for (let j = 1; j <= i - 1; j++) { ... }`:
//    - This loop adds spaces to the `str` variable for indentation.
//    - The number of spaces added is equal to the current row number `i` minus 1.

// 6. `for (let j = 1; j <= n; j++) { ... }`:
//    - This loop adds asterisks followed by a space to the `str` variable for each column in the pattern.
//    - The number of asterisks added is equal to the value of `n` entered by the user.

// 7. `console.log(str);`:
//    - Prints the string representation of the current row to the console.
//    - This displays each row of the pattern as it is constructed.

// Overall, the code generates a pattern of asterisks where each row contains the same number of asterisks as the total number of rows specified by the user. The number of spaces before each row increases with each row, creating a triangular pattern.
