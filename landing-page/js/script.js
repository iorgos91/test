window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    //спрятать неактивные вкладки
    function hideTabContent(a){
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    //переключение вкладок
    function showTabContent (b){
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', event => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent (i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadline = '2019-12-31';

    function getTimeRemaining (endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor ((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock () {
            let t = getTimeRemaining(endtime);
            
            function addZero(num){
                if(num <= 9) {
                    return '0' + num;   
                } else return num;
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer', deadline);

    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descr = document.querySelectorAll('.description-btn');

    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    descr.forEach(tabmodal => {
        tabmodal.addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    }); 
    

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //Form + Promise

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо, скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        contactForm = document.querySelector('#form'),
        contactInput = contactForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');   
    
    function sendForm (elem, inp){
        elem.addEventListener ('submit', function(event){
            event.preventDefault();
            elem.appendChild(statusMessage);
        
            let formData = new FormData(elem);

            function postData(data) {
                return new Promise (function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    request.onreadystatechange = function(){
                        if (request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve()                    
                        } else {
                            reject()
                        }
                    }
                    request.send(data);
                })
            }

            function clearInput (){
                for (let i = 0; i < inp.length; i++) {
                    inp[i].value = '';
                }
            }
            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)
        });
    }
    sendForm(form, input);
    sendForm(contactForm, contactInput);
    
    //Slider
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    
    showSlides(slideIndex);
    function showSlides (n){

        if (n > slides.length) {
            slideIndex = 1;
        } else if ( n < 1) {
            slideIndex = slides.length; 
        }
        slides.forEach(item => item.style.display = 'none');
        dots.forEach(item => item.classList.remove('dot-active'));
        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].classList.add('dot-active');
    }
    function toggleSlides(n) {
        showSlides(slideIndex += n)
    }
    function currentSlide(n){
        showSlides (slideIndex = n);
    }
    prev.addEventListener('click', () => {
        toggleSlides(-1);
    });
    next.addEventListener('click', () => {
        toggleSlides(1);
    });
    dotsWrap.addEventListener('click', event => {
        for(let i = 0; i < dots.length + 1; i++){
            if (event.target.classList.contains('dot') && event.target == dots[i-1]){
                currentSlide(i);
            }
        }
    });

    //Calculator

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.querySelector('#select'),
        totalValue = document.querySelector('#total'),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        reset = document.querySelector('#reset-btn');

    totalValue.innerHTML = 0;
    persons.addEventListener('input', function() {
        personsSum = +this.value;
        total = (daysSum * personsSum) * 4000;
        if (restDays.value == '' || restDays.value <= 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
    restDays.addEventListener('input', function() {
        daysSum = +this.value;
        total = (daysSum * personsSum) * 4000;
        if (persons.value == '' || persons.value <= 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('input', function() {
        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
    reset.addEventListener('click', () => {
        totalValue.innerHTML = 0;
    });
});
