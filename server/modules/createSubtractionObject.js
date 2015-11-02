var createSubtractionObject = function(req){
    var output = {};
    output["value1"] = req.body.valueInput1;
    output["value2"] = req.body.valueInput2;
    output["operation"] = "subtracted";
    output["outputTotal"] = parseInt(output["value1"]) - parseInt(output["value2"]);
    return output;
}
module.exports = createSubtractionObject;