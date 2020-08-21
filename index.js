let localStorage = window.localStorage;

// const timeHours = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',]
let currentDay = document.querySelector('#current-day');
let boxSpan9 = document.querySelector('#box9');

$(document).ready(function () {

    function date() {
        setInterval(function () {
            var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
            $(currentDay).text(currentDate);
            // var currentHour=currentDate.getHours();
            // console.log(currentHour);
        }, 500);
    }
    date();
   

    document.querySelectorAll('.form-control').placeholder= "what to do?";

    $('#text-box9').on('click', function () {
        // console.log('clicked');
    });


    $('.saveBtn').on('click', function (event) {


        // let schedule = localStorage.getItem('schedule') || localStorage.setItem('schedule',JSON.stringify({}));
        // let input = $('#text-box9').val()
        // localStorage.setItem(event.target.id,JSON.stringify(input))
        // let item= localStorage.getItem('schedule');



        // console.log('item', item)
        // console.log('EVENT--->', event)
        var input = localStorage.getItem('input');
        // var storedInput=JSON.parse(localStorage.getItem(input));
        var storedInput= JSON.parse(localStorage.getItem('input'));
        var inputValue= $('#text-box9').val();
        localStorage.setItem('input', input)
        localStorage.setItem('input', JSON.stringify(inputValue));
      
        console.log(input);
        console.log(storedInput);
        console.log(inputValue);
        
       
        

    });
});

 // for (let i = 0; i < timeHours.length; i++) {
    //     var block = $($.parseHTML(timeBlock));
    //     // $('.container').append(`<div class='row time-block' data-time='${timeHours}`>);
    //     $('.container').append(block);
    //     $('.hour').text(timeHours[i]);
    // };