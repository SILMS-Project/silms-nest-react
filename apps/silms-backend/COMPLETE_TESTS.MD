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


## Testing All Students Endpoints  
Route: */students*  
Sample Url: *http://localhost:3000/backend/v1/students/* 

### Create New Student Endpoint [POST] 
parameter: *nil*  
<span style="color:green;">&#10004;</span>
Validate password requirements: at least 1 number, 1 special character, 1 capital letter, and minimum length of 8 characters.

<span style="color:red;">&#10060;</span> Flag if password is not equal to the confirm password

<span style="color:green;">&#10004;</span> Flag if Student already exists

<span style="color:green;">&#10004;</span> Successful creation without middle name

<span style="color:green;">&#10004;</span> Flag incorrect email format

<span style="color:red;">&#10060;</span> Flag if matric number is not exactly 11 digits long

<span style="color:green;">&#10004;</span> Flag if required details are missing.


### Get All Students [GET] 
Endpoint: *nil*  
<span style="color:red;">&#10060;</span> All students retrieved successfully.
<hr style="color:red;">
"error": {
        "statusCode": 500,
        "message": "Property \"profile\" was not found in \"Student\". Make sure your query is correct."
    }
<hr style="color:red;">

### Get a Student by ID [GET]   
Endpoint: *:id*  
<span style="color:red;">&#10060;</span> Successfully retrieved student by ID.  

<hr style="color:red;">
"error": {
        "statusCode": 500,
        "message": "Property \"profile\" was not found in \"Student\". Make sure your query is correct."
    }
<hr style="color:red;">

### Update Student by ID [PATCH]  
Endpoint: *:id*  
<span style="color:red;">&#10060;</span> Student updated successfully.

<hr style="color:red;">
"error": {
        "statusCode": 500,
        "message": "Property \"profile\" was not found in \"Student\". Make sure your query is correct."
    }
<hr style="color:red;">

### Delete Student by ID [PATCH]  
Endpoint: *:id*  
<span style="color:red;">&#10060;</span> Student deleted successfully.

<hr style="color:red;">
"error": {
        "statusCode": 500,
        "message": "Property \"profile\" was not found in \"Student\". Make sure your query is correct."
    }
<hr style="color:red;">