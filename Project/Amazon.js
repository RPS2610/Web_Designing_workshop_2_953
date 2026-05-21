const searchInput =
document.querySelector(".search-input");

const searchButton =
document.querySelector(".search-icon");

const boxes =
document.querySelectorAll(".box");


function searchProducts() {

    let value =
    searchInput.value.toLowerCase();

    boxes.forEach(function(box){

        let title =
        box.querySelector("h2")
        .innerText
        .toLowerCase();

        if(title.includes(value)){

            box.style.display = "block";

        }
        else{

            box.style.display = "none";

        }

    });

}


searchButton.addEventListener(
    "click",
    searchProducts
);


searchInput.addEventListener(
    "keyup",
    function(event){

        if(event.key === "Enter"){

            searchProducts();

        }

    }
);

const cart =
document.querySelector(".cart");

const buttons =
document.querySelectorAll(".box-content a");

let cartCount = 0;


buttons.forEach(function(button){

    button.addEventListener(
        "click",
        function(){

            cartCount++;

            cart.innerHTML =
            `<i class="fa-solid fa-cart-shopping"></i>
            Cart (${cartCount})`;

        }
    );

});

boxes.forEach(function(box){

    box.addEventListener(
        "mouseenter",
        function(){

            box.style.transition =
            "0.3s";

            box.style.transform =
            "translateY(-10px)";

            box.style.boxShadow =
            "0px 8px 20px rgba(0,0,0,0.3)";

        }
    );


    box.addEventListener(
        "mouseleave",
        function(){

            box.style.transform =
            "translateY(0px)";

            box.style.boxShadow =
            "none";

        }
    );

});

const images =
document.querySelectorAll(".bg_img");


images.forEach(function(image){

    image.addEventListener(
        "mouseenter",
        function(){

            image.style.transition =
            "0.4s";

            image.style.transform =
            "scale(1.05)";

        }
    );


    image.addEventListener(
        "mouseleave",
        function(){

            image.style.transform =
            "scale(1)";

        }
    );

});

const hero =
document.querySelector(".hero-sec");


const heroImages = [

"https://i.postimg.cc/ZRV9SbC9/hero-image-3.jpg",

"https://images.unsplash.com/photo-1523275335684-37898b6baf30",

"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"

];


let current = 0;


setInterval(function(){

    current++;

    if(current >= heroImages.length){

        current = 0;

    }

    hero.style.backgroundImage =
    `url('${heroImages[current]}')`;

},4000);

const backTop =
document.querySelector(".foot-panel1");


backTop.addEventListener(
    "click",
    function(){

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    }
);

let darkMode = false;


document.addEventListener(
    "keydown",
    function(event){

        if(event.key === "d"){

            darkMode = !darkMode;

            if(darkMode){

                document.body.style.background =
                "#111";

                document.body.style.color =
                "white";

            }
            else{

                document.body.style.background =
                "white";

                document.body.style.color =
                "black";

            }

        }

    }
);

const signIn =
document.querySelector(".nav-sign-in");


signIn.addEventListener(
    "click",
    function(){

        let username =
        prompt("Enter Your Name");

        if(username){

            signIn.innerHTML =

            `<p>
                <span class="hello">
                Hello, ${username}
                </span>
            </p>

            <p class="list">
            Account & Lists
            </p>`;

        }

    }
);

const navbar =
document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    function(){

        if(window.scrollY > 50){

            navbar.style.position =
            "sticky";

            navbar.style.top = "0";

            navbar.style.zIndex =
            "1000";

        }

    }
);

const deals =
document.querySelector(".deals p");


setInterval(function(){

    const now =
    new Date();

    deals.innerText =

    "🕒 " +

    now.getHours() + ":" +

    now.getMinutes() + ":" +

    now.getSeconds();

},1000);

window.addEventListener(
    "load",
    function(){

        boxes.forEach(function(box,index){

            setTimeout(function(){

                box.style.opacity = "1";

                box.style.transform =
                "translateY(0px)";

            },index * 100);

        });

    }
);

boxes.forEach(function(box){

    box.style.opacity = "0";

    box.style.transform =
    "translateY(30px)";

    box.style.transition =
    "0.5s";

});
