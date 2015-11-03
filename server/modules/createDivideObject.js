var createDivideObject = function(req){
    var output = {};
    output.valueOne = req.body.valueOne;
    output.valueTwo = req.body.valueTwo;
    output.operation = "divided";
    output.outputTotal = parseFloat(output.valueOne) / parseFloat(output.valueTwo);
    return output;
}
module.exports = createDivideObject;