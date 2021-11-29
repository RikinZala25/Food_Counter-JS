// Food Application, user will connect via JS.

console.log("Welcome to Food Store App");
console.log("Please create an account");
var username = prompt("Enter Name");
var password = prompt("Enter Password");
console.log("Account Created!, Now please Login to Continue");

var nametry = prompt("Enter Name");
var passtry = prompt("Enter Password");

while(username != nametry && password != passtry){
    console.log("You entered wrong username and password, try again");
    var nametry = prompt("Enter Name Again");
    var passtry = prompt("Enter Password Again");
}
console.log("You're logged in!");

var balance = 10;
console.log("Your current balance is " + balance + "$");

var quest1 = prompt("Do you want to Add Money? (y/n)");
if(quest1 == "y"){
    var addmoney = prompt("Enter Amount to add");
    var balance = balance + Number(addmoney);
    console.log("Now your current balance is " + balance + "$");
}
else if(quest1 == "n"){
    console.log("ok");
}

var quest2 = prompt("Would you like a burger (y/n)");
if(quest2=="y"){
    console.log("Choose the burger you want");
    var burgertype = ["Cheese Burger","Veggie Burger", "Garlic-Lover Burger"];
    var burgerprice = [2,3,4];

    console.log("choice 1: "+ burgertype[0]+" : "+ burgerprice[0]+"$");
    console.log("choice 2: "+ burgertype[1]+" : "+ burgerprice[1]+"$");
    console.log("choice 3: "+ burgertype[2]+" : "+ burgerprice[2]+"$");
    console.log("choice 4: choice 1 and 2");
    console.log("choice 5: choice 2 and 3");
    console.log("choice 6: choice 1 and 3");
    console.log("choice 7: choice 1, 2 and 3");

    var input = prompt("Enter your Choice");
    if(input == 1){
        var num1 = prompt("Enter quantity for " + burgertype[0]);
        var price = burgerprice[0] * Number(num1);
        console.log("Your Orders");
        console.log("Type: " + burgertype[0] + " Price: "+ burgerprice[0]+"$" + " Quantity: "+num1);
        console.log("Total Price: " + price);
        var balance = balance - price;
        console.log("You have " + balance + "$ left in your Account");
    }
    else if(input == 2){
        var num2 = prompt("Enter quantity for " + burgertype[1]);
        var price = burgerprice[1] * Number(num2);
        console.log("Your Orders");
        console.log("Type: " + burgertype[1] + " Price: "+ burgerprice[1]+"$" + " Quantity: "+num2);
        console.log("Total Price: " + price);
        var balance = balance - price;
        console.log("You have " + balance + "$ left in your Account");
    }
    else if(input == 3){
        var num3 = prompt("Enter quantity for " + burgertype[2]);
        var price = burgerprice[2] * Number(num3);
        console.log("Your Orders");
        console.log("Type: " + burgertype[2] + " Price: "+ burgerprice[2]+"$" + " Quantity: "+num3);
        console.log("Total Price: " + price);
        var balance = balance - price;
        console.log("You have " + balance + "$ left in your Account");
    }
    else if(input == 4){
        var num1 = prompt("Enter quantity for " + burgertype[0]);
        var num2 = prompt("Enter quantity for " + burgertype[1]);
        var price1 = burgerprice[0] * Number(num1);
        var price2 = burgerprice[1] * Number(num2);
        var price = Number(price1) + Number(price2);
        console.log("Your Orders");
        console.log("Type: " + burgertype[0] + " Price: "+ burgerprice[0]+"$" + " Quantity: "+num1);
        console.log("Type: " + burgertype[1] + " Price: "+ burgerprice[1]+"$" + " Quantity: "+num2);
        console.log("Total Price: " + price);
        var balance = balance - price;
        console.log("You have " + balance + "$ left in your Account");
    }
    else if(input == 5){
        var num2 = prompt("Enter quantity for " + burgertype[1]);
        var num3 = prompt("Enter quantity for " + burgertype[2]);
        var price2 = burgerprice[1] * Number(num2);
        var price3 = burgerprice[2] * Number(num3);
        var price = Number(price2) + Number(price3);
        console.log("Your Orders");
        console.log("Type: " + burgertype[1] + " Price: "+ burgerprice[1]+"$" + " Quantity: "+num2);
        console.log("Type: " + burgertype[2] + " Price: "+ burgerprice[2]+"$" + " Quantity: "+num3);
        console.log("Total Price: " + price);
        var balance = balance - price;
        console.log("You have " + balance + "$ left in your Account");
    }
    else if(input == 6){
        var num1 = prompt("Enter quantity for " + burgertype[0]);
        var num3 = prompt("Enter quantity for " + burgertype[2]);
        var price1 = burgerprice[0] * Number(num1);
        var price3 = burgerprice[2] * Number(num3);
        var price = Number(price1) + Number(price3);
        console.log("Your Orders");
        console.log("Type: " + burgertype[0] + " Price: "+ burgerprice[0]+"$" + " Quantity: "+num1);
        console.log("Type: " + burgertype[2] + " Price: "+ burgerprice[2]+"$" + " Quantity: "+num3);
        console.log("Total Price: " + price);
        var balance = balance - price;
        console.log("You have " + balance + "$ left in your Account");
    }
    else if(input == 7){
        var num1 = prompt("Enter quantity for " + burgertype[0]);
        var num2 = prompt("Enter quantity for " + burgertype[1]);
        var num3 = prompt("Enter quantity for " + burgertype[2]);
        var price1 = burgerprice[0] * Number(num1);
        var price2 = burgerprice[1] * Number(num2);
        var price3 = burgerprice[2] * Number(num3);
        var price = Number(price1) + Number(price2) + Number(price3);
        console.log("Your Orders");
        console.log("Type: " + burgertype[0] + " Price: "+ burgerprice[0]+"$" + " Quantity: "+num1);
        console.log("Type: " + burgertype[1] + " Price: "+ burgerprice[1]+"$" + " Quantity: "+num2);
        console.log("Type: " + burgertype[2] + " Price: "+ burgerprice[2]+"$" + " Quantity: "+num3);
        console.log("Total Price: " + price);
        var balance = balance - price;
        console.log("You have " + balance + "$ left in your Account");
    }
    else{
        console.log("Please enter your choice again");
    }
}
else{
    console.log("Have a good day");
}