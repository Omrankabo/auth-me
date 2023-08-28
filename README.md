# login route
<!-- - geting data -->
<!-- - check if the user is already exists -->
<!-- - check if the password is a vaild one -->
<!-- - create token data  -->
<!-- - create token  -->
<!-- - sign the token to next response  -->
<!-- - retrun a success message as json -->
# login page 
- ## onlogin function
 <!-- - set loading state to false -->
 <!-- - make a post request  -->
 <!-- - send message of opration success or failing -->
 <!-- -  navigate to profile page -->

# log out route
<!-- - making get request  -->
<!-- - create a response  -->
<!-- - set the token in cokie to empty one and expires in the same date 'not needed' -->
# profile page
<!-- - make a log out button -->
<!-- - log out functionalty -->
<!-- - make get request with axios -->
<!-- - push to login page  -->
# middleware
- ## logic part
    <!-- - export middleware function -->
    <!-- - find the path -->
    <!-- - check for public pathes  -->
    <!-- - extract token from the request -->
    <!-- - if the url is public and there is a token then redirect -->
    <!-- - there no public and token redirect to login -->
- ## matching path part
    <!-- - export config function with matcher for / profile / login / signup as array -->
# me route
<!-- - import get token data -->
<!-- - connect to db -->
<!-- - make get function -->
<!-- - make an id constant  -->
<!-- - find in the database for the user based on _id -->
<!-- - use select to remove unwanted values  -->
<!-- - return user as data -->
# helpers
<!-- - one to get token data  -->
<!-- - geting token value -->
<!-- - using jwt to verify the token -->
<!-- - extruct the id from it -->
# profile page
<!-- - get user details function -->
<!-- - make a state to store data for user details  -->
<!-- - make a button to fire details function -->
# sending emails
- helpers for sending email
- import nodemailer, User ,bcryptjs
- create async function to send email 
- parameter email emailType and userId
- incrept user id with toString 'we dont know the type of it 
- update user verify token and verify expires with options {new: , runValidators:} 'not needed'
- create a transport from nodemailer
- ## create mail options
    - from 
    - to 
    - subject 
    - ## html 
        - <p> click <a href=proccess.env.domain/verifyemail?token=${hasedToken}>here</a>
        to ${emailType === "VERIFY"? "verify your email: "reset your password"}
    - make the transporter to send the email
- ## api part 
- ## verifyemail route
    - connect to db 
    - create post function
    - getting data from frontend
    - find user based on the token and token expiry with time greater than now
    - check for user existense
    - update users isVerified and verify token than save 
- - use sendEmail in signup route