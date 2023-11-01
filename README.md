## Requirements
`User Roles`
There are 2 different roles in the database: Admin and Student.
`Signup Page`
Create a Signup page with an API that allows users to:
Register themselves.
Choose their role (Admin or Student).
`Login Page`
Implement a Login page with an API that:
Requires only username and password.
## Student Dashboard
When a user logs in as a Student, they should see 2 tabs:
My Responses
Forms.
`My Responses Tab`
The My Responses tab should:
Call an API to retrieve and display all the responses submitted by the student.
Display the responses in the form of Cards.
`Forms Tab`
The Forms tab should include a form with the following fields:
Name
Email
Phone
Profile Picture
Each field is required.
Upon submitting the form, the user should be redirected to the My Responses tab.
The latest response should be displayed in the My Responses tab.
## Admin Dashboard
When logging in as an Admin, the user should see only 1 tab: All Responses.
`All Responses Tab`
The All Responses tab should:
Call an API to retrieve all the submitted responses by all users.
Display the responses as Cards.
Each card should have a delete button.
Clicking the delete button should call an API to delete the response.
`Constraint`
using Redux is mandatory to store the submitted data and user information
`Optional`
Log Out Button should be available to log out the user and admin from their account