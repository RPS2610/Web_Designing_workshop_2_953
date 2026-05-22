

const searchInput =
document.querySelector('.search-input');

const searchBtn =
document.querySelector('.search-btn');

const boxes =
document.querySelectorAll('.box');


function searchProducts(){

    let value =
    searchInput.value.toLowerCase();

    boxes.forEach(function(box){

        let title =
        box.querySelector('h2')
        .innerText
        .toLowerCase();

        if(title.includes(value)){

            box.style.display = 'block';

        }

        else{

            box.style.display = 'none';

        }

    });

}

searchBtn.addEventListener(
    'click',
    searchProducts
);


/* CART */

const cart =
document.querySelector('.cart');

const buttons =
document.querySelectorAll('.box button');

let count = 0;

buttons.forEach(function(button){

    button.addEventListener(
        'click',
        function(){

            count++;

            cart.innerHTML =
            `<i class="fa-solid fa-cart-shopping"></i>
             Cart (${count})`;

        }
    );

});


/* AI CHAT */

const aiBtn =
document.querySelector('.ai-btn');

const chatBox =
document.querySelector('.chat-box');

const closeChat =
document.querySelector('.close-chat');

const sendBtn =
document.querySelector('.send-btn');

const chatInput =
document.querySelector('.chat-input');

const messages =
document.querySelector('.chat-messages');


aiBtn.addEventListener(
    'click',
    function(){

        chatBox.style.display = 'flex';

    }
);


closeChat.addEventListener(
    'click',
    function(){

        chatBox.style.display = 'none';

    }
);


sendBtn.addEventListener(
    'click',
    sendMessage
);

chatInput.addEventListener(
    'keypress',
    function(event){

        if(event.key === 'Enter'){

            sendMessage();

        }

    }
);


function sendMessage(){

    let text =
    chatInput.value.trim();

    if(text === '') return;


    let userDiv =
    document.createElement('div');

    userDiv.classList.add('user-msg');

    userDiv.innerText = text;

    messages.appendChild(userDiv);


    chatInput.value = '';


    let botDiv =
    document.createElement('div');

    botDiv.classList.add('bot-msg');


    let response =
    getBotReply(text);


    setTimeout(function(){

        botDiv.innerText = response;

        messages.appendChild(botDiv);

        messages.scrollTop =
        messages.scrollHeight;

    },700);

}


function getBotReply(message){

    message =
    message.toLowerCase();


    if(message.includes('hello')){

        return '👋 Hello! Welcome to Amazon AI Store';

    }

    else if(message.includes('laptop')){

        return '💻 Best gaming laptops are available in Electronics section';

    }

    else if(message.includes('phone')){

        return '📱 Latest smartphones are trending now';

    }

    else if(message.includes('fashion')){

        return '👕 Trending fashion collection available with discounts';

    }

    else if(message.includes('toys')){

        return '🧸 New AI selected toys are available';

    }

    else if(message.includes('beauty')){

        return '💄 Beauty products are on special sale';

    }

    else if(message.includes('furniture')){

        return '🛋️ Modern furniture available with fast delivery';

    }

    else if(message.includes('cart')){

        return '🛒 Your cart is updated successfully';

    }

    else if(message.includes('thank')){

        return '❤️ Happy to help you';

    }

    else{

        return '🤖 I am AI assistant. Try asking about products like laptops, fashion, toys, beauty or furniture.';

    }

}


/* HERO IMAGE SLIDER */

const hero =
document.querySelector('.hero');

const heroImages = [

'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'

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


/* DARK MODE */

let darkMode = false;

window.addEventListener(
    'keydown',
    function(event){

        if(event.key === 'd'){

            darkMode = !darkMode;

            if(darkMode){

                document.body.style.background = '#111';
                document.body.style.color = 'white';

            }

            else{

                document.body.style.background = '#eaeded';
                document.body.style.color = 'black';

            }

        }

    }
);


/* BACK TO TOP */

const topBtn =
document.querySelector('.footer-top');


topBtn.addEventListener(
    'click',
    function(){

        window.scrollTo({

            top:0,
            behavior:'smooth'

        });

    }
);