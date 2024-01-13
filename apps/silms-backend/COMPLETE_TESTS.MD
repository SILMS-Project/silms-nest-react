### Create a new user endpoint
<span style="color:green;">&#10004;</span> Ensure successful creation with middle name. 

<span style="color:green;">&#10004;</span> Ensure successful creation without middle name. 

<span style="color:green;">&#10004;</span> Flag incorrect email format.

<span style="color:red;">&#10060;</span> Only Validate passwords that meet these requirements: at least 1 number, 1 special character, 1 capital letter, and minimum length of 8 characters. 

<span style="color:green;">&#10004;</span> Flag if required details are missing. 

<span style="color:green;">&#10004;</span> Flag if user already exists. 

### Get all users
<span style="color:green;">&#10004;</span> Ensure successful retrieval of all users.

## Testing All School Endpoints  
Route: */schools*  
Sample Url: *http://localhost:3000/backend/v1/schools/* 


### Create New School Endpoint [POST]   
Endpoint: *nil*  
<span style="color:green;">&#10004;</span> Successfully created school.  

<span style="color:green;">&#10004;</span> Sends appropriate error message if school name is missing.     

<span style="color:green;">&#10004;</span> Sends appropriate error message if abbreviation is missing.     

<span style="color:green;">&#10004;</span> Sends appropriate error message if school already exists.   

<span style="color:green;">&#10004;</span> Flags if school name is not a string.   

<span style="color:green;">&#10004;</span> Flags if school abbreviation is not a string.   

### Get a School by ID [GET]   
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Successfully retrieved school by ID.

<span style="color:green;">&#10004;</span> Sends appropriate error message if school does not exist.  

### Get a School by abbreviation [GET] 
Endpoint: *abbreviation/:abbreviation*  
<span style="color:green;">&#10004;</span> Successfully retrieved school by abbreviation.  

<span style="color:green;">&#10004;</span> Sends appropriate error message if school does not exist.   


### Update School by ID [PATCH]  
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> School updated successfully. 


### Delete School [DELETE]  
Endpoint: *:id*  
<span style="color:red;">&#10060;</span> Delete endpoint not yet implemented (due to it's complexity)  