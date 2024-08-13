<h1 id="title" align="center">MERN-E-Banking-System</h1>

<p id="description">This Full Stack MERN Application is a comprehensive E-Bank system that allows users to create and manage their own secure online bank accounts. With this system users can easily perform common banking tasks such as depositing withdrawing and transferring money at any time. Additionally the application features an intuitive admin dashboard that enables administrators to efficiently manage user account requests and bank account statuses with ease. Whether you're a user looking for a convenient and secure way to manage your finances or an administrator seeking a powerful tool to streamline your workflow this application is the perfect solution.</p>

<h2>🚀 Demo</h2>
 https://my-e-bank-1.onrender.com/

<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Full Stack MERN Application (MongoDB Express.js React Node.js)
*   Secure user authentication and authorization using JSON Web Tokens (JWT)
*   User account creation and management (Deposit Withdraw and Transfer)
*   Admin dashboard for managing user account requests and bank account statuses
*   Responsive design using Tailwindcss for compatibility with a range of devices
*   Efficient and intuitive user interface for ease of use

<h2> Future Enhancements</h2>

<h3> Forgot Password Feature </h3>

<p>In the next version of the application, I plan to implement a "Forgot Password" feature to enhance user experience and security. This feature will allow users to reset their passwords if they forget them.

Planned Implementation Details:

*   Password Reset Request: Users will be able to request a password reset link by entering their registered email address.
*   Reset Link: The system will send a password reset link to the user's email with a secure token.
*   Reset Password Form: Users can use the link to access a password reset form where they can enter a new password.
*   Token Verification: The token will be validated to ensure it is valid and has not expired before allowing the password reset.
*   Security Measures: The new password will be hashed before being stored, and the reset token will be invalidated after use.
*   This feature aims to improve user convenience and account security. Stay tuned for its inclusion in the upcoming release.
</p>


### Accessing The Admin Dashboard:-

One can use the route ``"/admins/login"`` to log in to the admin's dashboard. However, you will need a registered admin/owner account in the database before you can do so. You can manually add a new admin document into the MongoDB database admins collection with the role of "owner". Once you have created the account and logged in with the credentials, you can add other admins through the admin's dashboard.

### Getting Started

<p>1. install (Frontend & Backend) dependencies</p>

for backend:-
```
npm insatll
```

for frontend:-
```
cd Frontend
npm insatll
```

<p>2. run the server</p>

```
cd ..
npm run both
```
