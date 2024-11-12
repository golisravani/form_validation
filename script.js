document.addEventListener('DOMContentLoaded',function(){
    const form= document.getElementById("registration-form");
     form.addEventListener('submit',function(event){
       event.preventDefault();
    
       const error = document.getElementById("errorMessages");
       error.innerHTML='';
        
       const fullName = document.getElementById("fullName").value;
       const number= document.getElementById("number").value;
       const pwd = document.getElementById("pwd").value;
       const confirmPwd= document.getElementById("confirmPwd").value;
    
       let isValid = true;
      
    const nameError= document.getElementById("nameError"); 
    if (fullName.length < 5){
        nameError.textContent = 'Name must not be less than 5 characters';
        isValid= false;
    } else {
        nameError.textContent='';
    }
    const emailInput = document.getElementById("email");
    const emailError= document.getElementById("emailError");
    const emailValue = emailInput.value;
    if (!emailValue.includes('@')){
    emailError.textContent = 'Enter correct email';
        isValid=false;
    } else{
        emailError.textContent='';
    }
    
    const phoneError = document.getElementById("phoneError");
    if (number==1234567890){
        phoneError.textContent='Phone Number cannot be 1234567890';
        isValid=false;
     
    }else if(number.length!==10 || isNaN(number)){
        phoneError.textContent='Invalid Phone Number';
        isValid=false;
    }
    else {
        phoneError.textContent='';
    }
    const pwdError = document.getElementById("pwdError");
    const pwdInput = document.getElementById("pwd").value;
    if (pwdInput=='password'|| pwdInput== fullName ){
        pwdError.textContent='Password is not strong';
        isValid= false;
    }else if (pwdInput.length<8){
        pwdError.textContent='Password cannot be less than 8 characters';
    }else if (! /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pwdInput) ){
        pwdError.textContent= 'Password must contain at least one special character';
        isValid=false;
    }else{
        pwdError.textContent='';
    } 
    const confirmPwdError = document.getElementById("confirmPwdError");
    if ( pwd !== confirmPwd){
        confirmPwdError.textContent='Password does not match';
        isValid=false;
    }else{
        confirmPwdError.textContent='';
    }
     if(isValid){
        form.submit();
     }
     }); 
    });