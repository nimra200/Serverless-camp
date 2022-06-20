const fetch = require('node-fetch')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    async function getPic(){
        const resp = await fetch("https://cataas.com/cat/cute/says/Bitcamp", {method: 'GET'});
        const data = await resp.arrayBuffer()
        return Buffer.from(data).toString('base64')
    }
   
    function result_name(){
        var all_names = ["Shreya", "Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"]
        let random_value = Math.floor(Math.random() * all_names.length)
        return all_names[random_value]
    }
    var firstCat = await getPic();
    var secondCat = await getPic();
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            cat1: firstCat, 
            cat2: secondCat,
            names: [result_name(), result_name()]
        }
    };
}