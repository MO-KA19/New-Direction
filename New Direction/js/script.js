// Clients Slider
function clientsSlider(className) {
    $(className).owlCarousel ({
        items: 4,
        margin: 14,
        loop: true,
        dots: false,
        nav: false,
        responsiveClass:true,
        responsive: {
            1440: {
                margin: 12
            },
    
            1024: {
                margin: 8,
                items: 3,
            },

            768: {
                margin: 6,
                items: 2
            },

            425: {
                items: 1,
                nav: true
            },

            375: {
                items: 1,
                nav: true
            },

            320: {
                items: 1,
                nav: true
            }
        }
    })
}
$(document).ready(clientsSlider(".companies"));



// Team Slider
function teamSlider(className) {
    $(className).owlCarousel({
        items: 1,
        margin: 8,
        loop: false,
        nav:false,
        dots: true,
        
    });
}
$(document).ready(teamSlider(".members"));



// Check html language
function language () {
    let path = location.pathname;
    let name = path.split("/").pop();
    return name
}



// Services Popup
let boxes = document.querySelectorAll(".box");
for (let i=0; i < boxes.length; i++) {
    boxes[i].onclick = async () => {
        let lang = language();

        if (lang == "index.html") {
            let url = "https://api.npoint.io/d7d610cfa55223d357a5";
            let request = await fetch (url);
            let data = await request.json();


            let icon = data["services"][i]["icon"];
            let title = data["services"][i]["name"];
            let para = data["services"][i]["para"];


            const message = Swal.mixin ({
                customClass: {
                    confirmButton: "confBtn",
                    title: "sw-title",
                }
            });
        
            message.fire({
                imageUrl: icon,
                title: title,
                html: `<p class="sw-txt">${para}</p>`,
                showConfirmButton: true,
                confirmButtonText: `ok`,
                confirmButtonColor: "#8DC442",
                backdrop: "rgba(0,0,0,0.7)",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },

                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        }

        else if (lang === "ar.html"){
            let url = "https://api.npoint.io/6cf7483b9545cae8fd8b";
            let request = await fetch (url);
            let data = await request.json();


            let icon = data["services"][i]["icon"];
            let title = data["services"][i]["name"];
            let para = data["services"][i]["para"];


            const message = Swal.mixin ({
                customClass: {
                    confirmButton: "confBtn",
                    title: "sw-title",
                }
            });
        
            message.fire({
                imageUrl: icon,
                title: title,
                html: `<p class="sw-txt">${para}</p>`,
                showConfirmButton: true,
                confirmButtonText: `اغلاق`,
                confirmButtonColor: "#8DC442",
                backdrop: "rgba(0,0,0,0.7)",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },

                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        };
    };
};





// Burger Icon Toggling
let menu = document.getElementById("burger");
let cross = document.getElementById("cross");
let aside = document.querySelector(".aside");

menu.onclick = () => {
    menu.style.display = "none";
    cross.style.display = "block";
    aside.style.display = "block";
};


cross.onclick = () => {
    menu.style.display = "block";
    cross.style.display = "none";
    aside.style.display = "none";
};