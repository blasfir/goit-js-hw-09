import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let e={email:"",message:""};const l=document.querySelector(".feedback-form"),m=document.querySelector('input[name="email"]'),o=document.querySelector('textarea[name="message"]');l.addEventListener("input",t=>{e.email=m.value,e.message=o.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))});document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("feedback-form-state");if(t!==null){const a=JSON.parse(t);m.value=a.email,o.value=a.message,e=a}});l.addEventListener("submit",t=>{t.preventDefault(),m.value.trim()===""||o.value.trim()===""?alert("Fill please all fields"):(console.log(e),l.reset(),localStorage.removeItem("feedback-form-state"),e={email:"",message:""})});
//# sourceMappingURL=2-form.js.map
