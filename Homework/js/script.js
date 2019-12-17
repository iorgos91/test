$(document).ready(function(){
    function showModal () {
        $('.overlay').fadeToggle('slow');
        $('.modal').animate(
            {
                'height' : 'toggle'
            }, 
            'slow'
        );
    }
    function hideModal(){
        $('.overlay').fadeToggle('slow');
        $('.modal').animate(
            {
                'height' : 'toggle'
            }, 
            'slow'
        );
    }
    $('.main_btna, .main_btn').on('click', showModal);
    $('.main_nav').find('li:eq(1)').on('click', showModal);
    $('.close').on('click', hideModal);
});