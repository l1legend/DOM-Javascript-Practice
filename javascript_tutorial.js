//Fun browser stuff:
document.querySelector("h1").style.visibility = "hidden";
document.querySelector("button").disabled = true;

[input into inspect element / console]
document.querySelector("button").classList.add("invisible"); //add invisible class to button; edit .invisible css class
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");

document.querySelector("h1").classList.toggle("huge");

document.querySelector("h1").innerHTML;
document.querySelector("h1").textContent;

document.querySelector("h1").innerHTML = "<em>Yo yo</em>";

document.querySelector("a");
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.bing.com");



//miscellaneous code
var tweet = prompt("Compose your tweet");
var tweetUnder140 = tweet.slice(0, 140);

alert(tweetUnder140);
alert("You have written " + tweet.length + " characters, you have " +(140 - tweet.length) + " characters remaining.");

alert(prompt("Compose your tweet:").slice(0, 140));


var name = prompt("What is your name?");
alert("Hello, " + name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase());


var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("Your dog is " + humanAge + " years old in human years.");


prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("Your love score is " + loveScore);



prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //1-100

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%" + " You love each other like Kanye loves Kanye");
}

if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%");
}
if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%" + " Well it ain't zero!");
}


function bmiCalculator (weight, height) {
    var bmi=Math.round (weight/(height*height));
    
    if (bmi <18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    }

    else if (bmi >= 18.5 && bmi <=24.9) {
    return "Your BMI is " + bmi + ", so you have a normal weight.";
    }

    else if (bmi >24.9 && bmi <= 29.9) {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }

    else if (bmi > 29.9 && bmi <= 34.9) {
        return "Your BMI is " + bmi + ", so you are obese.";
    }

    else {
        return "Your BMI is " + bmi + ", so you are extremely obese.";
     }
    return interpretation;
}


var guestList = ["a", "b", "c", "d", "e"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
    alert("Welcome!");   
} else {
    alert("Maybe next time.");
}




var output = [];
var count = 1;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz");
    } 
    if (count % 3 === 0){
        output.push("Fizz");
    } 
    if (count % 5 === 0){
        output.push("Buzz");
    } 
    else {
        output.push(count);
    }

    count++;
    console.log(output);
}

function fizzBuzz(){
    var output = [];
 
    var numbers = 0;
    
    for (var numbers = 1; numbers <= 101; numbers++){
        //Takes the variable number and adds 1 until it hits 100
 
        if (numbers % 3 === 0 && numbers % 5 != 0){
            output.push("Fizz");
        }
 
        else if (numbers % 5 === 0 && numbers % 3 != 0){
            output.push("Buzz");
        }
        else if (numbers % 3 === 0 && numbers % 5 === 0){
            output.push("FizzBuzz");
        }
        else{
            output.push(numbers);
        } 
    }
    console.log(output);
 
} 

fizzBuzz();