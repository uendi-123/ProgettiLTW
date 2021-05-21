$(document).ready(function(){
    //$('#dinamicDiv').load('../html/offerte.html');
    //Input che fanno uso dell'API Datepicker
    $('#dateStart').datepicker();
    $('#dateEnd').datepicker();
    $('#inputNascita').datepicker();

    //Implementazione dei Btn degli input con datepicker
    $('#calendarIconStart').click(function(){
        $('#dateStart').focus();
    });
    $('#calendarIconEnd').click(function(){
        $("#dateEnd").focus();
    });

    $('#signUpNascitaBtn').click(function(){
        $('#inputNascita').focus();
    })
    //Campo pass SignUP
    $('#showHideBtnSignUp').click(function(event) {
        if($('#inputPassSignUpModal').val().length > 1){
            event.preventDefault();
            $('#showPassIconSignUp').toggle();
            $('#hidePassIconSignUp').toggle();

            hideShowPass($('#inputPassSignUpModal'));
        }
    });
    //Campo conferma pass SignUP
    $('#showHideConfirmBtnSignUp').click(function(event) {
        if($('#inputConfirmPassSignUpModal').val().length > 1){
            event.preventDefault();
            $('#showConfirmPassIconSignUp').toggle();
            $('#hideConfirmPassIconSignUp').toggle();

            hideShowPass($('#inputConfirmPassSignUpModal'));
        }
    });

    $('#showHideBtnSignIn').click(function(event) {
        if($('#inputPassSignIn').val().length > 1){
            event.preventDefault();
            $('#showPassIconSignIn').toggle();
            $('#hidePassIconSignIn').toggle();

            hideShowPass($('#inputPassSignIn'));
        }
    });

    // $('.normalCard').click(function(){
    //     $('.normalCard').removeClass('activeCard');
    //     $(this).addClass('activeCard');

    //     $('.normalCard').children('span').removeClass('activeSpanCard');
    //     $(this).children('span').addClass('activeSpanCard');

    //     $('.normalCard').children('span').removeClass('activeSpanCard');

    //     for(let i = 0; i < $('.normalCard').length; i++){
    //         if($('.normalCard').get(i).children('span').hasClass('fs-2') && $('.normalCard')[i] !== $(this)){
    //             $('.normalCard')[i].children('span').removeClass('fs-2');
    //             $('.normalCard')[i].children('span').addClass('fs-4');

    //             $(this).children('span').removeClass('fs-4');
    //             $(this)[i].children('span').addClass('fs-2');
    //         }
    //     }
    //     $(this).children('span').addClass('fs-2');

    //     if($(this).attr('id') === 'offerteDiv'){
    //         $('#dinamicDiv').load('../html/offerte.html');
    //     }
    // });

    //SignUp Validation
    //La seguente istruzione mette nell'array tutti gli elem <input> del form
    var InputToCheckSignUp = $('#SignUpForm input');
    InputToCheckSignUp.each(function(){
        if($(this).attr('id') !== 'inputConfirmPassSignUpModal'){
            $(this).change(function(){
                console.log($(this).val() + ' ' + $(this).attr('id'));
                if($(this).val().length > 0){
                    if($(this).hasClass('is-invalid')){
                        $(this).removeClass('is-invalid');
                    }
                    $(this).addClass('is-valid');
                } else {
                    if($(this).hasClass('is-valid')){
                        $(this).removeClass('is-valid');
                    }
                    $(this).addClass('is-invalid');
                }
            })
        } else {
            //Check Pass e Conferma Pass
            $(this).change(function(){
                if($(this).val() === $('#inputPassSignUpModal').val()){
                    if($(this).hasClass('is-invalid')){
                        $(this).removeClass('is-invalid');
                    } 
                    $(this).addClass('is-valid');
                } else {
                    if($(this).hasClass('is-valid')){
                        $(this).removeClass('is-valid');
                    }
                    $(this).addClass('is-invalid');
                }
            })
        }
    })

    //SignIn Validation
    //La seguente istruzione mette nell'array tutti gli elem <input> del form
    var InputToCheckSignIn = $('#signInForm input');
    InputToCheckSignIn.each(function(){
        $(this).change(function(){
            if($(this).val().length > 0){
                if($(this).hasClass('is-invalid')){
                    $(this).removeClass('is-invalid');
                }
                $(this).addClass('is-valid');
            } else {
                if($(this).hasClass('is-valid')){
                    $(this).removeClass('is-valid');
                }
                $(this).addClass('is-invalid');
            }
        })
    })

    //Form Noleggio Validation
    var InputToCheckNoleggio = $('#noleggioForm input');
    InputToCheckNoleggio.each(function(){
        var check = true;
        $(this).change(function(){
            if($(this).val().length > 0){
                if($(this).hasClass('is-invalid')){
                    $(this).removeClass('is-invalid');
                }
                $(this).addClass('is-valid');
                check = true;
            } else {
                if($(this).hasClass('is-valid')){
                    $(this).removeClass('is-valid');
                }
                $(this).addClass('is-invalid');
                check = false;
            }
            invalidButton('#noleggioSubmitBtn', check);
        })
    })
})

let hideShowPass = el => {
    if (el.attr("type") == "password") {
        el.attr("type", "text");
    } else {
        el.attr("type", "password");
    }
}
let dateInput = el =>{

    btn = $(el).children('btn');

    el.datepicker();
    $(btn).click(function(){
        $(el).focus();
    })
}
//Controllo che tutti i campi del form SignIn siano validi
let checkSubmitSignIn = () => {
    var InputToCheckSignIn = $('#SignInForm input');
    var check = true;

    InputToCheckSignIn.each(function(){
        if($(this).hasClass('is-invalid') || !$(this).hasClass('is-valid')){
            check = false;
        }
    })
    return check;
}
//Controllo che tutti i campi del form SignUp siano validi
let checkSubmitSignUp = () => {
    var InputToCheckSignUp = $('#SignUpForm input');
    var check = true;

    InputToCheckSignUp.each(function(){
        if($(this).hasClass('is-invalid') || !$(this).hasClass('is-valid')){
            check = false;
        }
    })
    return check;
}
//Disabilita il Btn cerca fin quando tutti gli input (Citta, DataInizioNoleggio, DataFineNoleggio) non sono validi, cioe con length > 0
let invalidButton = (el, check) => {
    var InputToCheckNoleggio = $('#noleggioForm input');

    InputToCheckNoleggio.each(function(){
        if($(this).val().length < 1){
            check = false;
        }
    })

    if($(el).is('[disabled]') && check == true){
        $(el).prop('disabled', false);
    } else if(!$(el).is('[disabled]') && check == false){
        $(el).prop('disabled', true);
    }
}

