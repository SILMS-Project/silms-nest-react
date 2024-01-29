## Test Login and Verify Accounts Endpoints
#### Login
<span style="color:green;">&#10004;</span> Validate inputted details and generate a user access token.

<span style="color:green;">&#10004;</span> Flag if no wrong details are provided

<span style="color:green;">&#10004;</span> Flag if no details are provided

#### Verify Account
<span style="color:red;">&#10060;</span> Ensure successful verification of a token if correct (Although it verified the token when correct, it did not generate a comprehensive response)

## Test Confirm Reset Password token and Reset Password Endpoints
<span style="color:red;">&#10060;</span> Reset password:
Verify that the email has been successfully sent to the user if they exist. (Error message: Status code 500 error: cannot read properties of undefined (reading 'firstName'))

<span style="color:red;">&#10060;</span> Confirm reset password token:
Ensure successful verification of the token if correct. (Error message: Status code 500 error:cannot read properties of null(reading 'id') )

## Test All Endpoints in the Programs Section
#### Create a new program:

<span style="color:green;">&#10004;</span>Send a valid request with all required parameters.

<span style="color:green;">&#10004;</span>Ensure the endpoint returns a meaningful error response if any required parameters are empty.

<span style="color:red;">&#10060;</span> Attempt to create a program with the same name as an existing one.

#### Get a program by Name:

<span style="color:green;">&#10004;</span>Send a valid request with a program name.

<span style="color:red;">&#10060;</span> Flag if no name is inputted.
