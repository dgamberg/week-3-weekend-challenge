var equationObject = {};
var calcWindowOutput = "";
var valueOne = undefined;
var valueTwo = undefined;
var calcTotal = 0;

$(document).ready(function(){
    init();
});

//event listeners
function init(){

    //keypad events get value and add to calcWindowOutput
    $('.calc-keypad-number').on('click', function(){
        event.preventDefault();
        calcWindowOutput = calcWindowOutput + $(this).data('numkey');
        $('#keypadOutput').text(calcWindowOutput);
    });

    //reset Button
    $('#clearButton').on('click', function(event){
        resetAll();
    });

    //equals Button
    $('#equalsButton').on('click', function(event){
        event.preventDefault();
        if(valueOne != undefined && valueTwo == undefined){
            valueTwo = calcWindowOutput;
            equationObject["valueTwo"] = calcWindowOutput;
            //switch CASE
            //switch(equationObject.operation){
            //    case: "",
            //}
            callAjaxAddFunction();
            console.log("Current Object", equationObject);
        }
    });

    //Add Button
    $('#calcAddButton').on('click', function(event){
        equationObject["operation"] = "added";
        event.preventDefault();

        if(valueOne == undefined){
            equationObject["valueOne"] = calcWindowOutput;
            valueOne = calcWindowOutput;
            calcWindowOutput = "";
            console.log("Current Object", equationObject);
        }

        else if (valueTwo == undefined) {
            equationObject["valueTwo"] = calcWindowOutput;
            valueTwo = calcWindowOutput;
            callAjaxAddFunction();
            equationObject["calcTotal"] = calcWindowOutput;
            calcWindowOutput = "";
            console.log("Current Object", equationObject);
        }
        else {
            equationObject["valueOne"] = equationObject["calcTotal"];
            equationObject["valueTwo"] = calcWindowOutput;
            callAjaxAddFunction();
            console.log("Current Object", equationObject);
        }
    });

    //SUBTRACT Button
    $('#calcSubtractButton').on('click', function(event){
        equationObject["operation"] = "subtracted";
        event.preventDefault();

        if(valueOne == undefined){
            equationObject["valueOne"] = calcWindowOutput;
            valueOne = calcWindowOutput;
            calcWindowOutput = "";
            console.log("Current Object", equationObject);
        }

        else if (valueTwo == undefined) {
            equationObject["valueTwo"] = calcWindowOutput;
            valueTwo = calcWindowOutput;
            callAjaxSubtractFunction();
            equationObject["calcTotal"] = calcWindowOutput;
            calcWindowOutput = "";
            console.log("Current Object", equationObject);
        }
        else {
            equationObject["valueOne"] = equationObject["calcTotal"];
            equationObject["valueTwo"] = calcWindowOutput;
            callAjaxSubtractFunction();
            console.log("Current Object", equationObject);
        }
    });
}



function resetAll(){
    event.preventDefault();
    equationObject = {};
    calcWindowOutput = "";
    valueOne = undefined;
    valueTwo = undefined;
    $('#keypadOutput').text("0");
    console.log("Clear has been clicked");
}
function callAjaxAddFunction(){
    $.ajax({
        type: "POST",
        url: "/add",
        data: equationObject,
        success: function(data){
            $('#keypadOutput').text(data.outputTotal);
            console.log(data);
        }
    });
}

function callAjaxSubtractFunction(){
    $.ajax({
        type: "POST",
        url: "/subtract",
        data: equationObject,
        success: function(data){
            $('#keypadOutput').text(data.outputTotal);
        }
    });
}

function callAjaxMultiplyFunction(){
    $.ajax({
        type: "POST",
        url: "/multiply",
        data: equationObject,
        success: function(data){
            $('#keypadOutput').text(data.outputTotal);
        }
    });
}

function callAjaxDivideFunction(){
    $.ajax({
        type: "POST",
        url: "/divide",
        data: equationObject,
        success: function(data){
            $('#keypadOutput').text(data.outputTotal);
        }
    });
}
