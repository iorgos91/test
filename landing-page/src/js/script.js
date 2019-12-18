import 'es6-promise';
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';

import tabsModule from './modules/tabswitcher';
import calcModule from './modules/calc';
import formModule from './modules/form';
import sliderModule from './modules/slider';
import modalModule from './modules/modal';
import timerModule from './modules/timer';

window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    tabsModule();
    calcModule();
    formModule();
    sliderModule();
    modalModule();
    timerModule();
   
});
