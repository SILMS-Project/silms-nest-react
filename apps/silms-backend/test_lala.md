### User endpoints
### Get user [GET]
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Ensures successful retrieval of user by ID.

<span style="color:green;">&#10004;</span> Flags if user with specified ID doesn't exist.

### Update user [PATCH]
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Ensures successful update of user details.

<span style="color:green;">&#10004;</span> Flags if user with specified ID doesn't exist.

### Delete user [DELETE]
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Ensures successful deletion of user details.

<span style="color:green;">&#10004;</span> Flags if user with specified ID doesn't exist.


### Course Endpoints

### Create course [POST]
Endpoint: */courses/create*  
<span style="color:green;">&#10004;</span> Ensures successful creation of a new course.
<span style="color:green;">&#10004;</span> Flags if wrong parameter is provided

### Get all courses [GET]
Endpoint: */courses*  
<span style="color:green;">&#10004;</span> Ensures successful retrieval of all courses.

### Get course by ID [GET]
Endpoint: */courses/{id}*  
<span style="color:green;">&#10004;</span> Ensures successful retrieval of a course by ID.
<span style="color:green;">&#10004;</span> Flags if course with specified ID doesn't exist.

### Update course by ID [PATCH]
Endpoint: */courses/{id}*  
<span style="color:green;">&#10004;</span> Ensures successful update of a course by ID.
<span style="color:green;">&#10004;</span> Flags if course with specified ID doesn't exist.
<span style="color:green;">&#10004;</span> Flags if wrong update parameter is provided

### Delete course by ID [DELETE]
Endpoint: */courses/{id}*  
<span style="color:green;">&#10004;</span> Ensures successful deletion of a course by ID.
<span style="color:green;">&#10004;</span> Flags if course with specified ID doesn't exist.

### Get all courses under a program [GET]
Endpoint: */courses/program/id/{id}*  
<span style="color:green;">&#10004;</span> Ensures successful retrieval of all courses under a program.
<span style="color:green;">&#10004;</span> Flags if program with specified ID doesn't exist.

### Get all courses at a specific level [GET]
Endpoint: */courses/level/{lvl}*  
<span style="color:green;">&#10004;</span> Ensures successful retrieval of all courses at a specific level.
<span style="color:green;">&#10004;</span> Flags if no courses are available at the specified level.

### Get all courses at a specific level within a program [GET]
Endpoint: */courses/program/level*  
<span style="color:green;">&#10004;</span> Ensures successful retrieval of all courses at a specific level within a program.
<span style="color:green;">&#10004;</span> Flags if program or level doesn't exist.

### Get all courses at a specific level and semester within a program [GET]
Endpoint: */courses/program/level/semester*  
<span style="color:green;">&#10004;</span> Ensures successful retrieval of all courses at a specific level and semester within a program.
<span style="color:green;">&#10004;</span> Flags if program, level, or semester doesn't exist.

### Get course by course code [GET]
Endpoint: */courses/code/{code}*  
<span style="color:green;">&#10004;</span> Ensures successful retrieval of a course by course code.
<span style="color:green;">&#10004;</span> Flags if course with specified code doesn't exist.


### Lecture Endpoints

### Create a new lecturer [POST]
Endpoint */lecturers/create*
<span style="color:green;">&#10004;</span> Ensures successful creation of a new lecturer.
<span style="color:green;">&#10004;</span> Ensures new lecturer is registered as a user.
<span style="color:red;">&#10004;</span> Flags if wrong parameter is provided if role is not lecturer
<span style="color:green;">&#10004;</span> Flags if user already exists parameter is provided



### Lecturer Endpoints

### Create lecturer [POST]
Endpoint: */lecturers/create*  
<span style="color:green;">&#10004;</span> Ensures successful creation of a new lecturer.
<span style="color:red;">&#10004;</span> Flags if the specified department is not related to the program database.

### Get all lecturers [GET]
Endpoint: */lecturers*  
<span style="color:green;">&#10004;</span> Ensures successful retrieval of all lecturers.

### Get a lecturer by ID [GET]
Endpoint: */lecturers/{id}*  
<span style="color:green;">&#10004;</span> Ensures successful retrieval of a lecturer by ID.
<span style="color:green;">&#10004;</span> Flags if lecturer with specified ID doesn't exist.

### Update a lecturer by ID [PATCH]
Endpoint: */lecturers/{id}*  
<span style="color:green;">&#10004;</span> Ensures successful update of a lecturer by ID.
<span style="color:green;">&#10004;</span> Flags if lecturer with specified ID doesn't exist.

### Delete a lecturer by ID [DELETE]
Endpoint: */lecturers/{id}*  
<span style="color:green;">&#10004;</span> Ensures successful deletion of a lecturer by ID.
<span style="color:green;">&#10004;</span> Flags if lecturer with specified ID doesn't exist.
