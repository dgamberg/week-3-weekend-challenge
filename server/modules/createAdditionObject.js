var createAdditionObject = function(req){
    var output = {};
    output.valueOne = req.body.valueOne;
    output.valueTwo = req.body.valueTwo;
    output.operation = "added";
    output.outputTotal = parseFloat(output.valueOne) + parseFloat(output.valueTwo);
    console.log(output);
    return output;
    console.log(output);
}
module.exports = createAdditionObject;

