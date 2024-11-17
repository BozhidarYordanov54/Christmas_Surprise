// SURPRISE4MYDARLING

const form = document.getElementById('searchForm');

const redirectURL = 'https://smb-vt.com/Voucher/RetrieveQRCode?code=SURPRISE4MYDARLING';

const alertMessages = [
    'Изглежда, че кодът за ваучер не е валиден. Опитай пак, любов! 💖',
    'И това не е кодаааа, който търсиш. Опитай пак. 🥺',
    'Може би се намира в нечие име, но чие е? 🤔',
    'Търсиш ваучер, ама не го намираш. 🤷‍♀️',
    'Опитай пак, любов! 🥰',
    'Нещо не е наред. Опитай пак. 🤔',
    'Този код не е валиден.🥺',
];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const search = document.getElementById('search-bar').value;
    if(search.length == 0) {
        alert('Полето е празно, за сега хи хи хи! 😂');
        return;
    }

    if (search == 'SURPRISE4MYDARLING') {
        window.location.href = redirectURL;
    }
    else{
        let randomMessage = alertMessages[getRandomInt(alertMessages.length)];

        alert(randomMessage);
    }
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }