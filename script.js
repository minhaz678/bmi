//Declaring functions: two ways of doing this!

//Real function: using function keyword
// function func1() {
//     console.log("Give them: Hi 5!");
// }

// func1();

// //Anonymous function: through creating variables
// let func2 = (text) => {
//     console.log(text);
// }

// func2("Hi five!");


// Arguments and parameters, parameters are located in - 
//-the function declaration whereas arguments are in the-
//- brackets when running or calling the function.

// for any results or output: return keyword is used

const bmi = document.getElementById("bmi");
const input1 = document.getElementById("in1");
const input2 = document.getElementById("in2");
const button = document.getElementById("button");




function bmiCalculator() {
    // var weight = prompt("Enter your mass in 'Kg' unit:");
    // var height = prompt("Enter your height in 'm' unit:");
    var x = input1.value;
    var y = input2.value;
    var z = x*0.0254;
    var math = ((y) / (z**2));
    var bm = parseFloat(math.toFixed(1));
    return bm;
};

function calBmi() {
var bmiF = bmiCalculator();
    
if (bmiF >= 18.5 && bmiF <=24.9 ) {
    bmi.textContent = ("BMI is: " + bmiF + ", you're in the healthy weight range☺☺. Keep going like that and keep exercising!");

} else if (bmiF < 18.5) {
    bmi.textContent = ("BMI is: " + bmiF + ", you're in the underweight range🙂. Please, eat more!");

} else if (bmiF >=25 && bmiF <= 29.9) {
    bmi.textContent = ("BMI is: " + bmiF + ", you're in the overweight range😟😟. Please, eat less and do some exercises!");

} else if (bmiF >=30 && bmiF <= 39.9) {
    bmi.textContent = ("BMI is: " + bmiF + ", you're in the obese range😱😱🙏✋. Please, eat less and do more n more exercises!");

} else {
    bmi.textContent = ("Sorry!  you're not in the range!");
}

}


button.addEventListener("click", () => {
    calBmi()

});








































