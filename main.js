var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
  function loopStuff(x){
    for (var i = 0; i < x.length; i++) {
      console.log(x[i]);
    }
  }
  x.push(100);

  x = ["hello", "world", "Javascript is fun"];
  loopStuff(x);

function sumStuff(){
  var sum = 0;
  for (var i = 1; i <= 500; i++) {
    sum += i;
  }
  console.log(sum);
}
sumStuff();

var vals = [1, 5, 90, 25, -3, 0];
function minVal(vals) {
  min = vals[0];
  for (var i = 1; i < vals.length; i++) {
    if (vals[i] < min) {
      min = vals[i];
    }
  }
  console.log(min);
}
minVal(vals);

function avgVals(vals){
  sum = 0;
  for (var i = 0; i < vals.length; i++) {
    sum += vals[i]
    console.log(sum);
  }
  console.log(sum/vals.length);
}
avgVals(vals);

var new_ninja = {
  name: "Jessica",
  profession: "Coder",
  fav_lang: "Javascript",
  dojo: "Dallas"
}
function objectVals(new_ninja){
  for (var key in new_ninja) {
    console.log("Key: ", key, "Value: ", new_ninja[key])
  }
}
objectVals(new_ninja);
