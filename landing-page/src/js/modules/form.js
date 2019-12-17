//Form + Promise

function formModule(){
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
}
module.exports = formModule;