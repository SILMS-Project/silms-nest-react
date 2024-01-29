## Test Login and Verify Accounts Endpoints
#### Login
<span style="color:green;">&#10004;</span> Validate inputted details and generate a user access token.

<span style="color:green;">&#10004;</span> Flag if no wrong details are provided

<span style="color:green;">&#10004;</span> Flag if no details are provided

#### Verify Account
<span style="color:red;">&#10060;</span> Ensure successful verification of a token if correct (Although it verified the token when correct, it did not generate a comprehensive response)

## Test Confirm Reset Password token and Reset Password Endpoints
<span style="color:red;">&#10060;</span> Reset password:
Verify that the email has been successfully sent to the user if they exist. (Status code 500 error: cannot read properties of undefined (reading 'id'))



