$(document).ready(() => {
    sessionStorage.clear();
    
    $('.response1').click(() => {
        let response1 = $('input:radio[name=response1]:checked').val();
        sessionStorage.setItem('response1', response1);
        if (response1 == "Dominio") {
            $('.content').addClass('hide');
            $('.dominio').removeClass('hide');
        } else {
            $('.content').addClass('hide');
            $('.momento').removeClass('hide');
        }
        route()
    });

    $('.response1_1').click(() => {
        let response1_1 = $('input:radio[name=response1_1]:checked').val();
        sessionStorage.setItem('response1_1', response1_1);
        if (response1_1 == "Serie") {
            $('.content').addClass('hide');
            $('.serie').removeClass('hide');
        }else{
            $('.content').addClass('hide');
            $('.dominio').removeClass('hide');
        }
        route()
    });

    $('.response1_2').click(() => {
        let response1_2 = $('input:radio[name=response1_2]:checked').val();
        sessionStorage.setItem('response1_2', response1_2);
        route()
    });

    $('.response1_1_1').click(() => {
        let response1_1_1 = $('input:radio[name=response1_1_1]:checked').val();
        sessionStorage.setItem('response1_1_1', response1_1_1);
        $('.content').addClass('hide');
        $('.dominio').removeClass('hide');
        route()
    });
});

function route () {
    let answer1     = sessionStorage.getItem('response1');
    let answer1_1   = sessionStorage.getItem('response1_1');
    let answer1_2   = sessionStorage.getItem('response1_2');
    let answer1_1_1 = sessionStorage.getItem('response1_1_1');

    let route       = "";

    if(answer1){route+="/ "+answer1}
    if(answer1_1){route+="/ "+answer1_1}
    if(answer1_1_1){route+="/ "+answer1_1_1}
    if(answer1_2){route+="/ "+answer1_2}

    $('.route').text(route)
}