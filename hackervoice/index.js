module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const password = req.query.password;
    /*
    const responseMessage = password
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    */
    if (password === "letmein"){
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Access granted."
        };
    }else{
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Access denied."
        };
    }
    
}