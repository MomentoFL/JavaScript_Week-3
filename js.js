console.log("hi")
// EASY




function exercise(exercises) {
    if (exercises === "Running") {
        return "Today's Exercise: " + exercises;
    } if (exercises === "Swimming") {
        return "Today's Exercise: " + exercises;
    } if (exercises === "Dancing") {
        return "Today's Exercise: " + exercises;
    } if (exercises === "Fencing") {
        return "Today's Exercise: " + exercises;
    }


}


//Output: Today's exercise: Running
console.log(exercise("Running"))
//Output: Today's exercise: Swimming
console.log(exercise("Swimming"))
//Output: Today's exercise: Dancing
console.log(exercise("Dancing"))
//Output: Today's exercise: Fencing
console.log(exercise("Fencing"))




// MEDIUM


function sharePizza(slices, person) {


    const split = slices / person;
    return `Each person gets ${split.toFixed(2)} slices of pizza; from our from our 8 slice pizza`;
}


// Output: Each person gets 4 slices of pizza; from our 8 slice pizza
  console.log(sharePizza(8, 2));
// Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
  console.log(sharePizza(8, 3));
// Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
  console.log(sharePizza(21, 20));
// Output:Each person gets 3.33 slices of pizza; from our 10 slice pizza
  console.log(sharePizza(10, 3));




// HARD(done)


function getPatient(name, SSN) {
   let PII = {name, SSN}
   return {
     
       getName() {
           return PII.name;
       } ,
       getSSN() {
           return PII.SSN;
       }
     
   }




}




let patient2 = getPatient("John", "123-45-6789")




// Output: Undefined
 console.log(patient2.names);
// Output: Undefined
 console.log(patient2.ssn);
// Output: John
 console.log(patient2.getName());
// Output: 123-45-6789
 console.log(patient2.getSSN());


//VERY HARD


function Person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.exercise = function() {
        console.log("Running is fun! - said no one ever");
    }
    this.fetchJob = function() {
        console.log(`${this.name} is a ${this.job}`);
    }
}


const person1 = new Person("Harold", "Backend Engineer", 20);
const person2 = new Person("Jane", "Apprentice", 26);




//method is a function inside a object
//"completeTask" is a method
//"this.languages" is a property"
//"Programmer" is an object
//"this" is accessing the current object




function Programmer(name, job, age, languages, busy = true) {
    Person.call(this, name, job, age);
    this.languages = languages;
    this.busy = busy;
    this.completeTask = function() {
        this.busy = false;
    }
    this.acceptNewTask = function() {
        this.busy = true;
    }
    this.offerNewTask = function() {
        if (this.busy = true) {
            console.log(`${this.name} can't accept any new tasks right now`);
        } else if (this.busy = false) {
             console.log(`${this.name} would love to take on a new responsibility.`);
        }
    }


    this.learnLanguage = function(language) {
        this.languages += language;

    }


    this.listLanguage = function() {
        return this.languages;

    }


}


const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"], true);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "RUBY", ]);
const c3 = new Programmer("Manny", "SysOps", 31,["HTML", "CSS", "JS", "R", ]);



//calling
c1.learnLanguage(",CSS");
c2.learnLanguage(",C++");
c3.learnLanguage(",JAVA");
console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();


console.log(c1.completeTask());
console.log(c1.offerNewTask());


console.log(person1.fetchJob());
console.log(person2.fetchJob());













