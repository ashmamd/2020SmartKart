function validateForm(){
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    if(username == "" || password == ""){
        alert("Please enter all the required fields");
        return false;
    }
    else if ((username == "Customer") && (password == "Customer123")){
        alert("You are logged in as customer");
        window.location.href = "mainPageEng.html";
        return false;
    }
    else if ((username == "CustomerService") && (password == "Service123")){
        alert("You are logged in as customer service");
        window.location.href = "customerServiceEng.html";
        return false;
    }
    else if ((username == "Admin") && (password == "Admin123")){
        alert("You are logged in as admin");
        window.location.href = "AdminPage.html";
        return false;
    }
    else{
        alert("Invalid username or password");
        return false;
    }
    
}