var createMultiplyObject = function(req){
    var output = {};
    output.valueOne = req.body.valueOne;
    output.valueTwo = req.body.valueTwo;
    output.operation = "multiplied";
    output.outputTotal = parseInt(output.valueOne) * parseInt(output.valueTwo);
    return output;
}
module.exports = createMultiplyObject;