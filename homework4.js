// task1

// function calcRectangleArea(width, height) {
//     if(isNaN(width) || isNaN(height)) {
//         throw new Error("Incorrectly maintained data")
//     }
//     return width * height;
// }

// try {
//     console.log(calcRectangleArea(10, "hi"));
// } catch(error) {
//     console.log(error.message);
// }
       
// task2

// let ageUser = prompt("Enter your age:")

// function checkAge(ageUser) {
//     if(ageUser === " ") {
//         throw new Error("The field is empty! Please enter your age")
//     }else if(isNaN(ageUser)) {
//         throw new Error("Sorry, you did not enter a number value! Please enter your age")
//     }else if (ageUser <= 14){
//         throw new Error("Sorry, but you are too young")
//     }else {
//         return "CONGRATULATIONS!!! YOU HAVE ACCESS "
//     }
// }

// try {
//     console.log(checkAge(ageUser));
//     } catch(e) {
//     console.log(e.name);
//     console.log(e.message);
//     }

// task3

// class MonthException {
//     constructor(message) {
//         this.message = message;
//     }
//     showMonthName() {
//         if(this.message === 1) {
//             return "January"
//         }else if( this.message === 2){
//             return "February"
//         }else if( this.message === 3){
//             return "March"
//         }else if( this.message === 4){
//             return "April"
//         }else if( this.message === 5){
//             return "May"
//         }else if( this.message === 6){
//             return "June"
//         }else if( this.message === 7){
//             return "July"
//         }else if( this.message === 8){
//             return "August"
//         }else if(this.message === 9){
//             return "September"
//         }else if( this.message === 10){
//             return "October"
//         }else if( this.message === 11){
//             return "November"
//         }else if( this.message === 12){
//             return "December"
//         }else {
//             throw new Error("Incorrect month number")
//         }
//     }
// }

// try {
//     const secondMonth = new MonthException(2);
//     console.log(secondMonth.showMonthName());
//     const thirteenthMonth = new MonthException(13);
//     console.log(thirteenthMonth.showMonthName());
// }catch(e) {
//     console.log(e.message);
// }


// task4

// function showUser(id) {
//     if(id < 0) {
//         throw new Error(`Error: ID must not be negative: ${id}`);
//     }else {
//         return {id};
//     }
// }

// function showUsers(ids) {
//     const arr = [];
//     for(i = 0; i < ids.length; i++) {
//        try {
//         arr.push(showUser(ids[i]));
//        }catch (e){
//         console.log(e.message);
//        }
//     }
//     return arr;
// }

// console.log(showUsers([7, -12, 44, 22]))

