import throttle  from 'lodash.throttle';
const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector("input");
const messageEl = document.querySelector("textarea");
const dataForm = {
    "email": "",
    "message": "",
};
const LOCALSTORAGE_KEY = "feedback-form-state";
outputLocalStorage();

formEl.addEventListener('input', throttle(handleInput, 500)); 
formEl.addEventListener('submit', handleSubmit);

function handleInput(event) {
    
    if (event.target === emailEl) {
        dataForm.email = event.target.value.trim();
    } else {
        dataForm.message = event.target.value.trim();
    }
       localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
    
}
function handleSubmit(event) {
    event.preventDefault();
        if (emailEl.value === '' || messageEl.value === '') {
           return;
        
    }
    console.log(localStorage.getItem(LOCALSTORAGE_KEY));
    localStorage.removeItem(LOCALSTORAGE_KEY);
    
    formEl.reset;
        
    outputLocalStorage();
}
function outputLocalStorage() {
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    
    const parsedData = JSON.parse(savedData);
    if (savedData===null) {
         emailEl.value = "";
         messageEl.value = "";
    } else {
    
    dataForm.email = parsedData.email;
     dataForm.message = parsedData.message;
      emailEl.value = parsedData.email;
      messageEl.value = parsedData.message;  
    }
    
}
