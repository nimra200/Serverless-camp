const morse = require("morse-code-converter")
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const english = req.query.plaintext;
    
    var code = undefined;
    if (typeof(english) === undefined || english === ""){
        code = "Please type in some plaintext to convert"
    } else{
        code = morse.textToMorse(english);
    }
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: code
    };
}