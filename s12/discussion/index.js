// switch case

let day = "Monday";

switch(day){
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Friday":
        console.log("End of the work week");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend time");
        break;
    default:
        console.log("Its just another day");
}

function evaluateGrade(grade) {
    switch (grade) {
        case 'A':
            console.log("Excellent work!");
            break;
        case 'B':
            console.log("Good job!");
            break;
        case 'C':
            console.log("You can do better.");
            break;
        case 'D':
            console.log("Try harder next time.");
            break;
        default:
            console.log("Invalid grade.");
    }
}
evaluateGrade('A'); 
evaluateGrade('B'); 
evaluateGrade('C'); 
evaluateGrade('D'); 
evaluateGrade('F'); 


// when to use switch over if

// try catch finally statement

function showIntensityAlert(windSpeed){
    try{
        alert(determineTyphoonIntensity(windSpeed));
    }catch(error){
        console.log(typeof error);
    }finally{
        alert("Intensity updates will show new alert");
    }
}

showIntensityAlert(56);