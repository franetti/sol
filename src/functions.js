import language from "./language.js";

export function showResponsiveNav() 
{
    let x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

export function initObserver(targets)
{
    const callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fadeIn")
            }
        })
    }
    const myObserver = new IntersectionObserver(callback)
    targets.forEach( node => {
        myObserver.observe(node);
    })
    
}

export async function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      alert("Se envio correctamente. Nos comunicaremos con vos a la brevedad")
      form.reset()
    }).catch(error => {
      alert("Oops! There was a problem submitting your form")
    });
  }
  form.addEventListener("submit", handleSubmit)