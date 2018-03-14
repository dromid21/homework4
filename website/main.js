// Create constant url containing json file for later extraction
const url = `https://jsonplaceholder.typicode.com/users`;

// XMLHttpRequest procedure
// ------------------------
let req = new XMLHttpRequest(); // assign variable req to an XMLHttpRequest

// Use open method on req with `GET`, and url as 2nd parameter
req.open(`GET`, url) 

// Indicate that response type for req is JSON file
req.responseType = `json`; 

// Send request to the server
req.send(); 

// * Where things start to get messy* 
// If transfer completes successfully on req, use listen function. 
req.addEventListener(`load`, function(listen){ 
    let response = req.response; 
    
    // Use extractEmail function (to be later defined) on the response
    extractEmail(response); 
    
    // Log success code to the console
    console.log(`File: ${url} loaded successfully!`) 
});

// Error code to log if transfer fails
req.addEventListener(`error`, function(transferFailed){
    console.log(`Transfer for file: ${url} failed! Try again`);
});

// Error code to log if transfer is aborted
req.addEventListener(`abort`, function(transferCancelled){
    console.log(`File transfer for ${url} was aborted. Please try again`)
});


// Function `extractEmail` that will create array of email addresses from the json file
function extractEmail(file){
    
    // Initialize empty array for email lists to be pushed to
    emailList = [];
    
    // for iteration i, while iteration is less than length of file, add 1 to iteration
    // and perform the following function for every iteration
    for(var i = 0; i <file.length; i++){        
        
        // Perform push to the emailList array. 
        // Function will push along each i'th element of the json file
        // and will select the 'email' attribute
        emailList.push(` ` + `"` + file[i].email + `"`)
    };

    // Sort in alphabetical order
    emailList.sort();

    // Add to the html file along with text formatting
    document.getElementById(`xtp`).innerHTML = 
    'User emails from XMLHttpRequest: </br>' + '[' + emailList + ']';
};



// Fetch procedure
// ---------------
fetch(url) // Fetch url constant
.then(function(res){
    return res.json();
})

.then(function(extract){
    
    // Initialize empty usernames array for later
    let usernames = []; 

    // Begin function iterations using forEach
    extract.forEach(function(unameExtract){ // Declaration of username extract function
        
        // Extract username attribute from JSON file and push to usernames array, adding
        // space and quote strings for looks as specified in instructions
        usernames.push(` ` + `"` + unameExtract.username + `"`)
        
        // Determine length order using sort method on string (Thanks textbook, lol)
        usernames.sort(function(a, b){
            return a.length - b.length;
        });
        
        // Plug in usernames array into HTML file via 'fet' tag. Add in brackets for desired look.
        document.getElementById(`fet`).innerHTML = 
        'User usernames from fetch: </br></br>' + '[' + usernames + ']';
    });
});