//alert("Working");

//const { response } = require("express");

//const { name } = require("ejs");
// const loader=document.querySelector(".loader");
// const submitBtn=document.querySelector(".submit-btn");
// const name1=document.querySelector("#name");
// const email=document.querySelector("#email");
// const password=document.querySelector("#password");
// const number=document.querySelector("#number");
// const tac=document.querySelector("#terms-and-cond");
// const notification=document.querySelector("#notification");
// const alertBox=document.querySelector(".alert-box");

// console.log("Working:  ");
// submitBtn.addEventListener('click',()=>{
//     if(name1.value.length<3){
    
//         showAlert("name must be atleast 3 letters long");
//     }
//     else if(!email.value.length){
//         showAlert("enter your email");
//     }
//     else if(password.value.length<8){
//         showAlert("password must be atleast 8 charcters long");
//     }
//     else if(!number.value.length){
//         showAlert("mobile number must be 10 digits");
//     }
//     else if(!Number(number.value) || number.value.length!=10){
//         showAlert("invalid number , please enter valid number");
//     }
//     else if(!tac.checked){
//         showAlert("please accept terms and conditions");
//     }
//     else{
//         loader.style.display='block';
//         // setTimeout(()=>{
//         //     loader.style.display='none';
//         // },
//         // 1000
//         // );

//         sendData("/signup",{
//             name:name1.value,
//             email:email.value,
//             password:password.value,
//             number:number.value,
//             tac:tac.checked,
//             notification:notification.checked,
//             seller:false     
//         });



//     }
    
        
    
// });

// const sendData=(path,data)=>{
//     fetch(path, {
//         method:'post',
//         headers: new Headers( {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }),  
//        body:JSON.stringify(data)
//     }).then((res)=>
//         res.json())
//     .then(response => {
//         processData(response);
//     })

// }

// const processData = (data) =>{
//     loader.style.display='none';
//     if(data.alert){
//         showAlert(data.alert);
//     }
// }

// const showAlert=(msg)=>{
//     document.querySelector(".alert-msg").innerHTML=msg;
//     document.querySelector(".alert-box").classList.add("show");
//     setTimeout(()=>{
//         document.querySelector(".alert-box").classList.remove("show");
//        // document.querySelector(".alert-msg").innerHTML="Error Message";

//     },3000);

// }