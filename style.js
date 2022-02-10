
let account = new Object();


    var NAME = prompt("Enter your name") ;
    var passTry = 3;
    var BANKNAME = parseInt(prompt("Dear "+ NAME+ " What is your bank name?\n1.Swedbank\n2.SEB\n3.Nordea\n4.Danske Bank\n5.Santander\n6.Handelsbanken\n7.Sparbanken\n8.Others"));
    var YES_NO = 2;
    var passwordEntered = parseInt(prompt("Dear "+NAME+ ", Enter your 4 digits PIN"));
    var correct_pass = (/^[0-9]{4}$/); 
    var min_bal = 100;

    account.balance = 100;


    
    account.getBalance = function() {
        prompt("your Balance: " + account.balance + "$ ");
    }



account.deposit = function() {
    accountDeposit = parseFloat(prompt("How Much money would you like to deposit"));
    if(0 >= accountDeposit ){
        prompt("Please enter positive")
        account.deposit();
    }
    else if (accountDeposit > 0 ){
        account.balance += accountDeposit;
    }
    else{
        account.error();
        account.deposit();
    }
    
}

account.withdrawal = function() {
    accountWithdrawal = parseFloat(prompt("How much would you like to withdraw"))
    if(accountWithdrawal > account.balance ){
        prompt("You dont have enough money try again...");
        account.withdrawal();
    }


    else if(accountWithdrawal <= account.balance && accountWithdrawal > 0){
        prompt("You have withdrawn: " + accountWithdrawal + "$");
        account.balance -= accountWithdrawal;
    }
    else{
        account.error();
        account.withdrawal();
    }

}

account.getAccountName = function() {
    prompt("account name: " + NAME);
}



account.error = function() {
    prompt("Something went wrong try again");

}

account.exit = function() {
    prompt("Exiting the atm. Have a good day " + NAME);


    }
   
     

    
    function checkPassword(password){ //to check if the password is correct or not    
        if(correct_pass.test(passwordEntered)){
            optionMenu();
        }else{
            passTry = 3;
            while(!(correct_pass.test(passwordEntered))){
               alert("You don't a valid PIN, input the correct one now");
                alert("You have only " + passTry + " chances to try");
                passTry = passTry - 1; 

                if (passTry === 0){
                    alert("Maximum tries exceeded, please contact your bank to retrieve your ATM card"); 
                    exit();
                    break;
                } 
                passwordEntered = parseInt(prompt("Dear "+NAME+ ", Enter your 4 digits PIN"));
            }optionMenu();
        }
    }checkPassword(passwordEntered);



    function optionMenu(){
    
        var menuChoice = parseFloat(prompt("Hello, customer, what can we do for you today ? \n 1. Get balance \n 2. withdrawal \n 3. Deposit\n4. Account \n5.Exit "));
        if(menuChoice==1){
           account.getBalance();
           optionMenu();

        }else if(menuChoice==2){
            account.withdrawal();
            optionMenu();

        }else if(menuChoice==3){
            account.deposit();
            optionMenu();


        }else if(menuChoice==4){
            account.getAccountName();
            optionMenu();


        }else if (menuChoice ==5){
            account.exit();
            optionMenu();
        }
       
        else{
            alert("Please make a valid selection");
        }

    }
    this.optionMenu();

  





  

   

    