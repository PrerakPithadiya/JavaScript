let n = prompt("enter the number of rows: ");
let str;

for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 1; j <= n - i; j++) {
        str = str + " ";
    }
    for (let j = 1; j <= i; j++) {
        str = str + "* ";
    }
    console.log(str);
}