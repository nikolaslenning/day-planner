let localStorage = window.localStorage;
let textBox9=document.querySelector('#text-box9');
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
        // $('#text-box9').val('#9AMButton');
        // console.log('item', item)
        // console.log('EVENT--->', event)
        // console.log('schedule--->', schedule)

        let schedule=localStorage.getItem('inputKey') || localStorage.setItem('inputKey', JSON.stringify({}));
        var inputValue= $('#text-box9').val();
        // // var input = localStorage.getItem('inputKey');
        // // var storedInput=JSON.parse(localStorage.getItem(input));
        // // var storedInput= JSON.parse(localStorage.getItem('inputKey'));
        localStorage.setItem('inputKey', inputValue)
        // localStorage.setItem(event.target.id, JSON.stringify(inputValue));
        let item= JSON.parse(localStorage.getItem('inputKey'));
        // $("text-box9").val(inputValue);
        textBox9.textContent=inputValue;
        // console.log(schedule);
        // console.log(event);
        // console.log(inputValue);
        console.log(item);
        
       
        

    });
});

 // for (let i = 0; i < timeHours.length; i++) {
    //     var block = $($.parseHTML(timeBlock));
    //     // $('.container').append(`<div class='row time-block' data-time='${timeHours}`>);
    //     $('.container').append(block);
    //     $('.hour').text(timeHours[i]);
    // };