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



### Get All Schools [GET] 
Endpoint: *nil*  
<span style="color:green;">&#10004;</span> All schools retrieved successfully.  



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




---


## Testing All Lecturer-Courses Endpoints  
Route: */lecturer-courses*  
Sample Url: *http://localhost:3000/backend/v1/lecturer-courses/* 


### Create New Lecturer-Course Endpoint [POST]   
Endpoint: */create*  
<span style="color:green;">&#10004;</span> Successfully assigned Lecturer to Course.  

<span style="color:green;">&#10004;</span> Sends appropriate error message if courseId name is missing.     

<span style="color:green;">&#10004;</span> Sends appropriate error message if LecturerId is missing.     

<span style="color:green;">&#10004;</span> Sends appropriate error message if Lecturer has already been assigned to course (creation already exists).   
 
### Get All Lecturer-Courses [GET] 
Endpoint: *nil*  
<span style="color:green;">&#10004;</span> All Lecturer-Course retrieved successfully.  


### Get a Lecturer-Course by ID [GET]   
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Successfully retrieved Lecturer-Course by ID.

<span style="color:green;">&#10004;</span> Sends appropriate error message if Lecturer-Course does not exist.  

### Get a Courses taken by a Lecturer [GET] 
Endpoint: *course/:lecturerId*  
<span style="color:green;">&#10004;</span> Successfully retrieved courses taken by a lecturer.  

<span style="color:red;">&#10060;</span> Sends appropriate error message if lectureId does not exist.   

### Get lecturer(s) taking a course [GET] 
Endpoint: *lecturer/:courseId*  
<span style="color:green;">&#10004;</span> Successfully retrieved courses taken by a lecturer.  

<span style="color:red;">&#10060;</span> Sends appropriate error message if lectureId does not exist.   

### Unassign a Lecturer to a Course [POST]  
Endpoint: */unassigned*  
<span style="color:green;">&#10004;</span> Lecturer successfully unassigned from course. 

<span style="color:red;">&#10060;</span> Sends appropriate error message if lecture and course assignment does not exist. 

### Update Lecturer-Course by ID [PATCH]  
Endpoint: *:id*  
<span style="color:red;">&#10060;</span> Delete endpoint not yet implemented 



---
## Testing All Course-Module Endpoints  
Route: */course-modules*  
Sample Url: *http://localhost:3000/backend/v1/course-modules/* 


### Create New Course-Module Endpoint [POST]   
Endpoint: *nil*  
<span style="color:green;">&#10004;</span> Course-Modules successfully created.  

<span style="color:green;">&#10004;</span> Sends appropriate error message if Module number name is missing.     

<span style="color:green;">&#10004;</span> Sends appropriate error message if Module title is missing.     
  
 
### Get All Course-Modules [GET] 
Endpoint: *nil*  
<span style="color:green;">&#10004;</span> All Course-Modules retrieved successfully. 

### Get All Course-Modules with Course Content [GET] 
Endpoint: *nil*  
<span style="color:green;">&#10004;</span> All Course-Modules retrieved successfully with course content. 

### Find a Course-Module by ID [GET]   
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Successfully retrieved Course-Module by ID.

<span style="color:green;">&#10004;</span> Sends appropriate error message if Course-Module does not exist.  


### Update Course-Module by ID [PATCH]  
Endpoint: *:id*  
<span style="color:green;">&#10004;</span>  Course-Module updated successfully.

<span style="color:red;">&#10060;</span> Does not appropriate error message if Course-Module does not exist.


### Delete Course-Module [DELETE]  
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Course-Module deleted successfully

<span style="color:green;">&#10004;</span> Sends appropriate error message if Course-Module does not exist.  


---
## Testing All Schedules Endpoints  
Route: */schedules*  
Sample Url: *http://localhost:3000/backend/v1/schedules/* 


### Create New Schedule Endpoint [POST]   
Endpoint: *nil*  
<span style="color:green;">&#10004;</span> Successfully created school.  

<span style="color:green;">&#10004;</span> Sends appropriate error message if DayOfWeek is not Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.     

<span style="color:green;">&#10004;</span> Sends appropriate error message if DayOfWeek is missing.     

<span style="color:green;">&#10004;</span> Sends appropriate error message if startTime is missing.   

<span style="color:green;">&#10004;</span> Sends appropriate error message if endTime is missing.   

<span style="color:green;">&#10004;</span> Sends appropriate error message if courseId does not exists.   

<span style="color:green;">&#10004;</span> Flags if startTime is not a string. 

<span style="color:green;">&#10004;</span> Flags if endTime is not a string.  

<span style="color:green;">&#10004;</span> Flags if room is not a string.   

### Get All Schedules [GET] 
Endpoint: *nil*  
<span style="color:green;">&#10004;</span> All Schedules retrieved successfully. 


### Find a Schedule by ID [GET]   
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Successfully retrieved Schedule by ID.

<span style="color:green;">&#10004;</span> Sends appropriate error message if schedule does not exist. 

### Find a Schedule by program and level [GET]   
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Successfully retrieved Schedule by program and level.


### Update Schedule by ID [PATCH]  
Endpoint: *:id* 
```Body
{
    "programId":"62dd4598-439d-4bfd-bdc4-ff46c5c3076d",
    "level":"100"
}
```

<span style="color:green;">&#10004;</span>  Schedule updated successfully.

<span style="color:green;">&#10004;</span>  Shows appropriate error message if Schedule does not exist.

### Delete Schedule [DELETE]  
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Schedule deleted successfully

<span style="color:green;">&#10004;</span> Sends appropriate error message if Schedule does not exist.  


---
## Testing All Student-Course Endpoints  
Route: */student-courses*  
Sample Url: *http://localhost:3000/backend/v1/student-courses/* 


### Create New Schedule Endpoint [POST]   
Endpoint: *nil*  
<span style="color:green;">&#10004;</span> Successfully created school.  

<span style="color:green;">&#10004;</span> Sends appropriate error message if DayOfWeek is not Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.     

<span style="color:green;">&#10004;</span> Sends appropriate error message if DayOfWeek is missing.     

<span style="color:green;">&#10004;</span> Sends appropriate error message if startTime is missing.   

<span style="color:green;">&#10004;</span> Sends appropriate error message if endTime is missing.   

<span style="color:green;">&#10004;</span> Sends appropriate error message if courseId does not exists.   

<span style="color:green;">&#10004;</span> Flags if startTime is not a string. 

<span style="color:green;">&#10004;</span> Flags if endTime is not a string.  

<span style="color:green;">&#10004;</span> Flags if room is not a string.   

### Get All Student-Course [GET] 
Endpoint: *nil*  
<span style="color:green;">&#10004;</span> All Schedules retrieved successfully. 


### Find a Student-Course by ID [GET]   
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Successfully retrieved Student-Course by ID.

<span style="color:red;">&#10060;</span>  Does not send appropriate error message if Student-Course does not exist. 



### Update Schedule by ID [PATCH]  
Endpoint: *:id* 
```Body
{
    "programId":"62dd4598-439d-4bfd-bdc4-ff46c5c3076d",
    "level":"100"
}
```

<span style="color:green;">&#10004;</span>  Schedule updated successfully.

<span style="color:green;">&#10004;</span>  Shows appropriate error message if Schedule does not exist.

### Delete Schedule [DELETE]  
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Schedule deleted successfully

<span style="color:green;">&#10004;</span> Sends appropriate error message if Schedule does not exist.  