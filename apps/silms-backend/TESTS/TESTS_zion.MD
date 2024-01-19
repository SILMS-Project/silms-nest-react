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