const emp = {
    fName: "A",
    salary: 23456
};

const person = new Object(
    {
        firstName: "Janvi",
        lastName: "Zamre",
        age: 22,
        eyeColor: "brown",

        getData: function () 
        {
            console.log();
        }
    });


person.getData();
console.log(person);

console.log(person.firstName);

