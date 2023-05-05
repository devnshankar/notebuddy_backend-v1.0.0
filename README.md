# Notedbuddy Server

This is the server for Notedbuddy, a note-taking app. 
![picture1](https://media.discordapp.net/attachments/1079853000211837001/1103916663511978025/Screenshot_2023-05-05_105658.png?width=1067&height=609)
![picture1](https://media.discordapp.net/attachments/1079853000211837001/1103916663839137813/Screenshot_2023-05-05_105808.png?width=1050&height=609)
![picture1](https://media.discordapp.net/attachments/1079853000211837001/1103916664162103397/Screenshot_2023-05-05_105918.png?width=1050&height=609)

## Dependencies
The server is built using Node.js and uses the following dependencies:
- `bcryptjs`: Used for hashing passwords before storing them in the database.
- `cookie-parser`: Used for parsing cookies.
- `cors`: Used for enabling Cross-Origin Resource Sharing.
- `dotenv`: Used for loading environment variables.
- `express`: A popular Node.js framework used for building web applications and APIs.
- `jsonwebtoken`: Used for generating and verifying JSON Web Tokens (JWTs).
- `mongoose`: An Object-Document Mapping (ODM) library for MongoDB.
- `nodemon`: `dev` A nodejs continuous runtime handler.

## Getting Started

To get started with the Notedbuddy server, clone the repository and run the following command:
```bash
npm install
```
This will install all the necessary dependencies.
Next, create a .env file in the root directory of the project and add the following variables:
```bash
DB_URL=<database url>
SECRET=<jwt secret key>
CLIENTURL=<client side base url>
PORT=<server port>
```
Replace <your-mongodb-uri> with the URI for your MongoDB database and <your-jwt-secret> with a secret string of your choice.
Finally, start the server with the following command:
```bash
npm start
```
The server will start listening on port 5000 by default. You can change the port by setting the PORT environment variable.
## The Notedbuddy server exposes the following endpoints:
- `POST /auth/register`: Used for registering a new user.
- `POST /auth/login`: Used for logging in an existing user.
- `GET /notes`: Used for retrieving all notes for the authenticated user.
- `POST /notes`: Used for creating a new note for the authenticated user.
- `GET /notes/:id`: Used for retrieving a single note by ID for the authenticated user.
- `PUT /notes/:id`: Used for updating a single note by ID for the authenticated user.
- `DELETE /notes/:id`: Used for deleting a single note by ID for the authenticated user.

All endpoints except for POST /api/auth/register and POST /api/auth/login require the user to be authenticated. Authentication is done using JWTs, which are included in the Authorization header of each request.

## Issues
- For some reason the cookie is setting when http is used in the local environment but when it is moved to production the cookie setting 
doesn't work properly although the login and register works fine, the creating and deleting and fetching of notes is not working properly.

## License
This project is licensed under the MIT License.
