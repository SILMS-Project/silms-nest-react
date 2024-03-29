## Testing All Course Contents Endpoints
Route: */course-contents*
Sample Url: *http://localhost:3000/backend/v1/course-contents/*

### Create New Course [POST]
Endpoint: *nil*  
<span style="color:green;">&#10004;</span> Courses successfully created.  
<span style="color:green;">&#10004;</span> Sends appropriate error message if Course title is missing.     
<span style="color:green;">&#10004;</span> Sends appropriate error message if Course content is missing.
<span style="color:green;">&#10004;</span> Sends appropriate error message if Course module id is missing.

### Get All Course Contents [GET]
<span style="color:green;">&#10004;</span> All courses retrieved successfully.  

### Get a Course Content by ID [GET]
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Successfully retrieved Course content by ID.
<span style="color:green;">&#10004;</span> Sends appropriate error message if Course content does not exist.  

### Get all Courses under a Program [GET]
Endpoint: *program/id/:id*  
<span style="color:green;">&#10004;</span> Successfully retrieved all Course contents.
<span style="color:green;">&#10004;</span> Sends appropriate error message if Course content does not exist. 

### Get all Courses at a specific level [GET]
Endpoint: *level/:lvl*  
<span style="color:green;">&#10004;</span> Successfully retrieved all Course contents.
<span style="color:green;">&#10004;</span> Sends appropriate error message if Course content does not exist. 

### Get all Courses at a specific level within a program [GET]
Endpoint: *program/level*  
<span style="color:green;">&#10004;</span> Successfully retrieved all Course contents.
<span style="color:green;">&#10004;</span> Sends appropriate error message if Course content does not exist.

### Get a Course Content by Course Code [GET]
Endpoint: *:code*  
<span style="color:green;">&#10004;</span> Successfully retrieved Course content by Course code.
<span style="color:green;">&#10004;</span> Sends appropriate error message if Course content does not exist. 

### Update Course Content by ID [PATCH]
Endpoint: *:id*  
<span style="color:green;">&#10004;</span>  Course content updated successfully.
<span style="color:red;">&#10060;</span> Does not appropriate error message if Course content does not exist.

### Delete Course Content by ID [DELETE]
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Course content deleted successfully
<span style="color:green;">&#10004;</span> Sends appropriate error message if Course content does not exist.
