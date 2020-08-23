let localStorage = window.localStorage;
let textBox9=document.querySelector('#text-box9');
let currentDay = document.querySelector('#current-day');
var hoursOfDay=[9,10,11,12,13,14,15,16,17];

$(document).ready(function () {

    function date() {
        setInterval(function () {
            var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
            $(currentDay).text(currentTime);
            var i=0;

            $('.hour').each(function() {
                let currentHour=moment().hour(hoursOfDay[i]);
                currentHour.minutes(0);
                console.log(currentHour);
                
                if (currentHour.hour() < moment().hour()) {
                    $(this).parent().addClass('past');
                } 
                else if (currentHour.hour = moment().hour()) {
                    $(this).parent().addClass('present');
                } 
                else if (currentHour.hour > moment().hour()) {
                    $(this).parent().addClass('future');
                }                
               i++
            });
        }, 500);
    }
    date();
   
    var inputText=localStorage.getItem('inputKey');
    $('#text-box9').val(inputText);

    $('#9AMButton').on('click', function (event) {
        var inputValue= $('#text-box9').val();
        localStorage.setItem(event.target.id, inputValue)
    });
    
    var inputText1=localStorage.getItem('10AMButton');
    $('#text-box10').val(inputText1);
   
    $('#10AMButton').on('click', function (event) {
        var inputValue1= $('#text-box10').val();
        localStorage.setItem(event.target.id, inputValue1)       
});
    var inputText2=localStorage.getItem('11AMButton');
    $('#text-box11').val(inputText2);
   
    $('#11AMButton').on('click', function (event) {
        var inputValue2= $('#text-box11').val();
        localStorage.setItem(event.target.id, inputValue2)        
});
    var inputText3=localStorage.getItem('12PMButton');
    $('#text-box12').val(inputText3);
   
    $('#12PMButton').on('click', function (event) {
        var inputValue3= $('#text-box12').val();
        localStorage.setItem(event.target.id, inputValue3)        
});
    var inputText4=localStorage.getItem('1PMButton');
    $('#text-box1').val(inputText4);
    
    $('#1PMButton').on('click', function (event) {
        var inputValue4= $('#text-box1').val();
        localStorage.setItem(event.target.id, inputValue4)        
});
    var inputText5=localStorage.getItem('2PMButton');
    $('#text-box2').val(inputText5);
    
    $('#2PMButton').on('click', function (event) {
        var inputValue5= $('#text-box2').val();
        localStorage.setItem(event.target.id, inputValue5)        
});
    var inputText6=localStorage.getItem('3PMButton');
    $('#text-box3').val(inputText6);
    
    $('#3PMButton').on('click', function (event) {
        var inputValue6= $('#text-box3').val();
        localStorage.setItem(event.target.id, inputValue6)        
});
    var inputText7=localStorage.getItem('4PMButton');
    $('#text-box4').val(inputText7);
    
    $('#4PMButton').on('click', function (event) {
        var inputValue7= $('#text-box4').val();
        localStorage.setItem(event.target.id, inputValue7)        
});
    var inputText8=localStorage.getItem('5PMButton');
    $('#text-box5').val(inputText8);
    
    $('#5PMButton').on('click', function (event) {
        var inputValue8= $('#text-box5').val();
        localStorage.setItem(event.target.id, inputValue8)        
});
});
