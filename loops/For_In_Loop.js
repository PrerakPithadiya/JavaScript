const student = {
    name: "Prerak Pithadiya",
    age: 17,
    percent: 89.12,
    isPass: true
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}