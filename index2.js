

// const axios = require("axios");



const fetchData =async () =>{
    try{

    

    const response = await fetch(
        'https://cricbuzz-cricket.p.rapidapi.com/series/v1/international',
    
    {
        crossDomain: true,
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bac38731e4msh1b21d39bc429049p1065a2jsn7a6528c9f67d',
		'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
        }
    }
);
const data = await response.json();
console.log(data);

} catch(err){
    console.log(err);
} finally{
    console.log("Hello");
}


}
