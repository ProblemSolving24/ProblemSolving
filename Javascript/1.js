console.log('jS ready2');

// For work-space
// var space = document.getElementById("work-space");
// var shareBtn = document.getElementById("work-space-btn");


// shareBtn.addEventListener('click', 
//     function() {
//     if(space.classList.contains('show-work-space')){
//         space.classList.remove('show-work-space');
//         space.classList.add('hide-work-space');   
//     }
//     else{
//         space.classList.remove('hide-work-space');
//         space.classList.add('show-work-space');   
//     } 
// })


// var viewAns = document.getElementById("view-answer");
var viewAns = document.getElementsByClassName("view-answer");
// console.log(ansData.classList)
// console.log(ans.classList.contains('show-answer'))
// // console.log(ans.classList.remove('show-answer'))
// console.log(ans.classList.add('hide-answer'))
// console.log(ans.classList)
 
function showHideAnswer(e) {
    e.preventDefault();
    var ansData = document.getElementById(e.target.name);
    console.log("hi e = ",e)
    if(ansData.classList.contains('show-answer')){
        console.log("hi inside if")
        ansData.classList.remove('show-answer');
        ansData.classList.add('hide-answer');   
    }
    else{
        console.log("hi inside if")
        ansData.classList.remove('hide-answer');
        ansData.classList.add('show-answer');   
    }

    
    
    
};
// viewAns.forEachonclick =  showHideAnswer;
Array.from(viewAns).forEach((v) => {
    console.log(v);
    v.onclick = showHideAnswer;
  });

// viewAns.addEventListener('click', 
//     function() {
//     if(ansData.classList.contains('show-answer')){
//         console.log("hi inside if")
//         ansData.classList.remove('show-answer');
//         ansData.classList.add('hide-answer');   
//     }
//     else{
//         console.log("hi inside if")
//         ansData.classList.remove('hide-answer');
//         ansData.classList.add('show-answer');   
//     }
    
// })




// For view-answer
// var ans = document.getElementById("answer");
// var viewAns = document.getElementById("view-answer");

// viewAns.addEventListener('click', 
//     function() {
//     if(ans.classList.contains('show-ans')){
//         ans.classList.remove('show-ans');
//         ans.classList.add('hide-work-space');   
//     }
//     else{
//         ans.classList.remove('hide-work-space');
//         ans.classList.add('show-ans');   
//     }
    
// })





// For work space
// var space = document.getElementById("work-space");
// var shareBtn = document.getElementById("work-space-btn");





// var a = setTimeout(
//     function(){
//         console.log(space.classList)
//         // space.classList.add('show-work-space');

//     }
//     ,5000);


//  Right-Wrong image show + Option disable (On Qestion MCQ)
// var correct_image = correct_image;
// var wrong_image = wrong_image;

console.log("Ready with question")
var rightWrong = $('.show-hide-right-wrong')



rightWrong.bind('click', function(e){
    var optionValue = e.target.value;
    var get_opt_id = $(this).attr('id').split('_');
    var get_answer_id = "#correct-answer_" + get_opt_id[1];
    var correct_ans_val = $(get_answer_id).val();


    console.log("Hi printing value = ==", optionValue, get_opt_id)
    var img_id = "#"+get_opt_id[0]+"img_"+get_opt_id[1];
    console.log(img_id)
    if(optionValue == correct_ans_val){
        $(img_id).attr('src',window.correct_image);

        
        var opt_count = get_opt_id[0].replace("opt","");
        console.log("opt_count = ",opt_count);
        for(var i=1;i<5;i++){
            var tmp_opt = "#opt"+i+"_"+get_opt_id[1];
            console.log("generated option id = =",tmp_opt);

            if(opt_count != i){
                $(tmp_opt).parent('p').fadeTo('fast',0.2);
                $(tmp_opt).prop('disabled',true);
               
            }      
        }

    }
    else{
        $(img_id).attr('src',window.wrong_image);
        
        $(this).parent('p').fadeTo('fast',0.2);
        $("#exp_".get_opt_id[1]).hide();
        
        
        console.log("image", img_id)

    }

});


//Show-Hide social button

$('.share-btn-social').click(function(){
    $('.container').toggleClass('hide')
    $.get("set_interesantes.php?n=Frank Melo&u=f6e79cfe9c0ecc4c08dac4c860c4802b&back=http://localhost:8085/Something/success/profile.php?search_user=f6e79cfe9c0ecc4c08dac4c860c4802b&p=12&sa=f6e79cfe9c0ecc4c08dac4c860c4802b&i=2345123&dl=&iv=1" );
    return false;
});




