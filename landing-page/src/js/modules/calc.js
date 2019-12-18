//Calculator

function calcModule(){
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
}
export default calcModule;