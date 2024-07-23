console.log("scrip loaded");

// console.log("scrip loaded = ",$('.faQ-inner-div'));

// var innerDiv = $('.faQ-inner-div')
// console.log("scrip loaded2 = ",innerDiv);

// innerDiv.click(function(){
//     console.log("Inside fi")
    
//     // $('.faQ-ans-div').toggleClass('hide')

// });

// innerDiv.click(function(){
//     alert("hi")
//     $('.faQ-ans-div').toggleClass('hide')
//     // $.get("set_interesantes.php?n=Frank Melo&u=f6e79cfe9c0ecc4c08dac4c860c4802b&back=http://localhost:8085/Something/success/profile.php?search_user=f6e79cfe9c0ecc4c08dac4c860c4802b&p=12&sa=f6e79cfe9c0ecc4c08dac4c860c4802b&i=2345123&dl=&iv=1" );
//     // return false;
// });

// $(document).ready(function() {

//     $('.faQ-inner-div').on('click', function() {
        
//         $('.faQ-ans-div').fadeToggle();
        
//         // toggleClass(('hide'));
//         // $.get("set_interesantes.php?n=Frank Melo&u=f6e79cfe9c0ecc4c08dac4c860c4802b&back=http://localhost:8085/Something/success/profile.php?search_user=f6e79cfe9c0ecc4c08dac4c860c4802b&p=12&sa=f6e79cfe9c0ecc4c08dac4c860c4802b&i=2345123&dl=&iv=1" );
//         // return false;
//     });

// });

$(document).ready(function() {

    $('.faQ-inner-div').on('click', function() {
        
        var get_q_id = $(this).attr('id');
        var tmp_id = get_q_id.split("q_");
        var ans_id = "#a_"+tmp_id[1]
        // $('#a_'+tmp_id).fadeToggle();
        $(ans_id).fadeToggle();

    });

});