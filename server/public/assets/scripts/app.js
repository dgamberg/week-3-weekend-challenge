
var values = {};
var calcOutput = "";
var equationContainer = [];
$(document).ready(function(){
    init();
});

//event listeners
function init(){
    //number buttons
    $('.calc-keypad-number').on('click', function(){
        event.preventDefault();
        calcOutput = calcOutput + $(this).data('numkey');
        //outputContainer.push($(this).data('numkey'));
        $('#keypadOutput').text(calcOutput);
    });
    //lower keypad
    $('.calc-keypad-function').on('click', function(event){
         event.preventDefault();
    });

    //clear button
    $('#clearButton').on('click', function(event){
        event.preventDefault();
        $('#calcOutput').text("0");
        $('#keypadOutput').text("0");
        calcOutput = "";
        equationContainer = [];

    });
    //New ADD BUTTON
    $('#calcAddButton').on('click', function(event){
        submitFunctions(event);
        equationContainer.push(calcOutput);
        equationContainer.push("+");
        calcOutput = "";
        $('#keypadOutput').text("0");
        console.log(equationContainer);
    });


    $('#addButton').on('click', function(event){
        submitFunctions(event);
        callAjaxAddFunction();
    });
    $('#subtractButton').on('click', function(event){
        submitFunctions(event);
        callAjaxSubtractFunction();
    });
    $('#multiplyButton').on('click', function(event){
        submitFunctions(event);
        callAjaxMultiplyFunction();
    });
    $('#divideButton').on('click', function(event){
        submitFunctions(event);
        callAjaxDivideFunction();
    });
}
function submitFunctions(event){
    event.preventDefault();
    $.each($('#mainCalculator').serializeArray(), function(i, field){
        values[field.name] = field.value;
    });
    $('#mainCalculator').find("input[type=text]").val("");
}

function callAjaxAddFunction(){
    $.ajax({
        type: "POST",
        url: "/add",
        data: values,
        success: function(data){
            $('#calcOutput').text(data.outputTotal);
        }
    });
}

function callAjaxSubtractFunction(){
    $.ajax({
        type: "POST",
        url: "/subtract",
        data: values,
        success: function(data){
            $('#calcOutput').text(data.outputTotal);
        }
    });
}

function callAjaxMultiplyFunction(){
    $.ajax({
        type: "POST",
        url: "/multiply",
        data: values,
        success: function(data){
            $('#calcOutput').text(data.outputTotal);
        }
    });
}

function callAjaxDivideFunction(){
    $.ajax({
        type: "POST",
        url: "/divide",
        data: values,
        success: function(data){
            $('#calcOutput').text(data.outputTotal);
        }
    });
}