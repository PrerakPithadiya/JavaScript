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