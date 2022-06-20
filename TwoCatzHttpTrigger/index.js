const fetch = require('node-fetch')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    const resp = await fetch("https://cataas.com/cat/cute/says/Bitcamp", {method: 'GET'});
    const data = await resp.arrayBuffer()
    var base64data = Buffer.from(data).toString('base64')
    
    const resp2 = await fetch("https://cataas.com/cat/cute/says/Bitcamp", {method: 'GET'});
    const data2 = await resp.arrayBuffer()
    var base64data2 = Buffer.from(data).toString('base64')
    
    
   
    let all_names = ["Shreya", "Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"]
   
    function result_name(names){
        let random_value = Math.floor(Math.random() * all_names.length)
        return names[random_value]
    }
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            cat1: {base64data}, 
            cat2: {base64data2},
            names: [result_name(all_names), result_name(all_names)]
        }
    };
}