let formData = { email: "", message: "" };
const formEl = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const textareaMassage = document.querySelector('textarea[name="message"]');
formEl.addEventListener("input", event => {
    formData.email = inputEmail.value;
    formData.message = textareaMassage.value;
	localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});
document.addEventListener("DOMContentLoaded", () => {
    const feedbackFormStateValue = localStorage.getItem("feedback-form-state");  
    if (feedbackFormStateValue !== null) {
    const parsedFeedbackFormStateValue = JSON.parse(feedbackFormStateValue);  
    inputEmail.value = parsedFeedbackFormStateValue.email;
    textareaMassage.value = parsedFeedbackFormStateValue.message;
    formData = parsedFeedbackFormStateValue;    
  } 
});
formEl.addEventListener("submit", event => {
    event.preventDefault();
	if (inputEmail.value.trim() === "" || textareaMassage.value.trim() === "") {
       alert("Fill please all fields"); 
    } else {
        console.log(formData);
        formEl.reset();
        localStorage.removeItem("feedback-form-state");
        formData = { email: "", message: "" };
    }
});
