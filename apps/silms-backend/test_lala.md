### Get user [GET]
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Ensures successful retrieval of user by ID.

<span style="color:green;">&#10004;</span> Flags if user with specified ID doesn't exist.

### Update user [PATCH]
Endpoint: *:id*  
<span style="color:green;">&#10004;</span> Ensures successful update of user details.

<span style="color:red;">&#10060;</span> Flags if user with specified ID doesn't exist.
<span style="color:red;">&#100060;</span> Doesn't update foreign key values when applicable.

### Delete user [DELETE]
Endpoint: *:id*  
<span style="color:red;">&#10060;</span> Flags Unssucessful deletion due to foreign keys not being properly handled

<span style="color:green;">&#10004;</span> Flags if user with specified ID doesn't exist.
