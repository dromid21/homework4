const url = `https://jsonplaceholder.typicode.com/users`;

// Fetch procedure

fetch(url) // Fetch url constant
.then(res => res.json())
.then((extract) => {
    
    // Initialize empty usernames array for later
    let usernames = []; 

    // Begin function iterations using forEach
    extract.forEach(function(unameExtract){ // Declaration of username extract function
        
        // Extract username attribute from JSON file and push to usernames array, adding
        // space and quote strings for looks as specified in instructions
        usernames.push(` ` + `"` + unameExtract.username + `"`)
        
        // Determine alphabetic order using sort method on string (Thanks textbook, lol)
        usernames.sort(function(a, b){
            return a.length - b.length;
        });
        
        // Plug in usernames array into HTML file via 'fet' tag. Add in brackets for desired look.
        document.getElementById(`fet`).innerHTML = 
        'User usernames from fetch: </br></br>' + '[' + usernames + ']';
    });
});