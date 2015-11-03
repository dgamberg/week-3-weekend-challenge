var values = {};
var calcOutput = "";
var valueOne = 0;
var valueTwo = 0;
var calcTotal = 0;

$(document).ready(function(){
    init();
});

function logAllVars(){
    console.log("CalcOutput: ", calcOutput);
    console.log("Two: ", valueOne);
    console.log("Two: ", valueTwo);
    console.log("Calc Total: ", calcTotal);
}

//event listeners
function init(){
    //number buttons
    $('.calc-keypad-number').on('click', function(){
        event.preventDefault();
        calcOutput = calcOutput + $(this).data('numkey');
        //outputContainer.push($(this).data('numkey'));
        $('#keypadOutput').text(calcOutput);
    });

    //clear button
    $('#clearButton').on('click', function(event){
        event.preventDefault();
        $('#keypadOutput').text("0");
        calcOutput = "";
        valueOne = 0;
        valueTwo = 0;
        calcTotal = 0;

    });

    //Equals Button
    $('#equalsButton').on('click', function(event){
        event.preventDefault();
        submitFunctions(event);
        calcTotal = parseInt(valueOne) + parseInt(valueTwo);
        logAllVars();

    });

    //ADD BUTTON
    $('#calcAddButton').on('click', function(event){
        event.preventDefault();
        submitFunctions(event);
        //write an add function that takes 2 args instead
        if(valueOne == 0){
            // if there is no numbers
            valueOne = calcOutput;
            calcOutput = "";
        }
        else if (valueOne > 0 && valueTwo == 0) {
            //if there is one number
            calcTotal = parseFloat(valueOne) + calcTotal;
            calcOutput = "";
            logAllVars();
        }
        else if (valueOne > 0 && valueTwo > 0 ){
            // if we have both numbers
            calcTotal = parseFloat(valueOne) + parseFloat(valueTwo)
            calcOutput = "";
            logAllVars();
        }

    });
}
function submitFunctions(event){
    event.preventDefault();
    var $calc = $('#mainCalculator');
    $.each($calc.serializeArray(), function(i, field){
        values[field.name] = field.value;
    });
    $calc.find("input[type=text]").val("");
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