Build Some Functions:
function runningLogger(){
  console.log("I am running");
}

runningLogger();

function multiplyByTen(value){
  value = value * 10;
  console.log(value);
}
multiplyByTen(5);


function stringReturnOne(){
  console.log("Need a job");
}

function stringReturnTwo(){
  console.log("Need a career");
}

stringReturnOne();
stringReturnTwo();

function whatType(something){
  if(typeof something == 'function'){
    something(5);
  }
  else{
    console.log("Nope, not a function");
  }
}

whatType(multiplyByTen);
whatType("Google");

function myDoubleConsoleLog(param1, param2){
  if(typeof param1 == 'function' || typeof param2 == 'function'){
    param1();
    param2();
  }
  else {
    console.log("Not a function");
  }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

function caller2(param){
  console.log("starting");

  setTimeout(function() {
    if(typeof param == 'function'){
      param(stringReturnOne, stringReturnTwo);
    }
  }, 2000 );
  console.log("ending");

  return "interesting";
}

caller2(myDoubleConsoleLog);

Javascript Fundamentals Part II:

Anonymous functions - Self invoking functions:
(function sumStuff(){
  var sum = 0;
  for (var i = 1; i <= 500; i++) {
    sum += i;
  }
  console.log(sum);
})();

var vals = [1, 5, 90, 25, -3, 0];
(function minVal(vals) {
  min = vals[0];
  for (var i = 1; i < vals.length; i++) {
    if (vals[i] < min) {
      min = vals[i];
    }
  }
  console.log(min);
})(vals);

(function avgVals(vals){
  sum = 0;
  for (var i = 0; i < vals.length; i++) {
    sum += vals[i]
  }
  console.log(sum/vals.length);
}) (vals);

Rewrite as objects:
(function sumStuff(){
  var sum = {total: 0};
  for (var i = 1; i <= 500; i++) {
    sum.total += i;
  }
  console.log(sum.total);
})();

var vals = {
  0: 1,
  1: 5,
  2: 90,
  3: 25,
  4: -3,
  5: 0};
(function minVal(vals) {
  min = vals[0];
  for (var key in vals) {
    if (vals[key] < min) {
      min = vals[key];
    }
  }
  console.log(min);
})(vals);

(function avgVals(vals){
  sum = 0;
  size = 0;
  for (var key in vals) {
    size++;
    sum += vals[key]
  }
  console.log(sum/size);
}) (vals);

Javascript object called person:
var person = {
  name: "Tiffany",
  distance_traveled: 0
}

function say_name(){
  alert(person.name);
}
say_name();

function say_something(param){
  console.log(person.name, "says: ", param);
}
say_something("Will I ever find a job?");

function walk(){
  person.distance_traveled += 3;
  alert(person.name + " is walking...New distance: " + person.distance_traveled);
}
walk();

function run(){
  person.distance_traveled += 10;
  alert(person.name + " is running...New Distance: " + person.distance_traveled);
}
run();

function crawl(){
  person.distance_traveled += 1;
  alert(person.name + " is crawling...New Distance is: " + person.distance_traveled);
}
crawl();


Javascript Fundamentals Part III:
  var your_name = prompt("Enter your name: ");
  var person = {
    name: your_name,
    distance_traveled: 0
  }

  (function say_name(){
    alert(person.name);
  })();

  (function say_something(param){
    alert(person.name + " says: " + param);
  })("I'm going to have a career soon!");

  (function walk(){
    person.distance_traveled += 3;
    alert(person.name + " is walking...New distance: " + person.distance_traveled);
  })();

  (function run(){
    person.distance_traveled += 10;
    alert(person.name + " is running...New Distance: " + person.distance_traveled);
  })();

  (function crawl(){
    person.distance_traveled += 1;
    alert(person.name + " is crawling...New Distance is: " + person.distance_traveled);
  })();

  function ninjaContructor(){
    var ninja = {
      name: "Tiffany",
      cohort: "First",
      belt_level: "Yellow Belt"
    }

    function say_name(){
      alert(ninja.name);
    }
    say_name();

    function level_up(){
      belt++

      if(belt == 2){
        ninja.belt_level = "Red Belt";
      }
      else if (belt == 3) {
        ninja.belt_level = "Black Belt";
      }
      else{
        ninja.belt_level = "Black Belt";
        alert("Congrats, you have the highest belt!");
      }

      alert(ninja.name + " has a " + ninja.belt_level);
    }

    level_up();
    
  }
ninjaContructor();
