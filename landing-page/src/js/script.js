window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    let tabsModule = require('./modules/tabswitcher'),
        calcModule = require('./modules/calc'),
        formModule = require('./modules/form'),
        sliderModule = require('./modules/slider'),
        modalModule = require('./modules/modal'),
        timerModule = require('./modules/timer');

        tabsModule();
        calcModule();
        formModule();
        sliderModule();
        modalModule();
        timerModule();
   
});
