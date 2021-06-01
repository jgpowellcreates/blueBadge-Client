## Welcome to the Agora Marketplace!

This project was part of the requirement to pass Eleven Fifty Academy's Blue Badge benchmark.
The objective for this project was to build a full stack application as a team that displayed our understanding of:
 * Node
 * PostgreSQL
 * Express
 * REST API's
 * Creating API endpoints
 * React Basics and Styling
 * Connecting server and client
 * Utilizing Github as a team

### Project Requirements Included
##### Project Planning
* Planning document completed w/ project objective, data structures, endpoints, wireframe and styling

##### Server
* Must be wrriten using Node
* Have at least 2 tables in your database
* One table must be a 'users' table that stores user infromation
* The other table must implement full CRUD functionality
* Must support session validation with JWT
* Must encrupt sensitive material such as passwords (used bcrypt)
* Must include at least 8 API endpoints
* Must be deployed with Heroku

##### Client
* Must be written in React
* Must utilize custom styling in all views
* Add form validation to user signup/login
* Must connect with the server's deployed URL
* Must display the functionality of the minimum 8 endpoints in the server
* Must be deployed with Heroku


### Where is it now?
Now that I have completed the Web Development course, I am revisiting certain projects to make improvements to their look/functionality. This project was built by a group of young developers in a short timeframe. As a result, there are several changes I'd like to see implemented in this project before I would consider it completed:
- [x] JSON web token is grabbed from local storage w/ useEffect so that user stays signed in after refresh
- [ ] Form validation is included on all required input fields
- [ ] Form validation catched multiple errors to clearly inform user of error encountered
- [x] Logout button replaces "Login/Register" button on Navbar when a user is signed in
- [x] "Market" page maps all items in Agora database
- [x] Stock image is not included in POST. Instead, products with a null imageURL are mapped w/ an img displaying "No Product Image"
- [ ] Users can upload their own product images through integrating [Cloudinary media platform](https://cloudinary.com/)
- [ ] Visuals updated
   - [x] Hover pseudo classes in effect for all buttons
   - [ ] Action buttons for edit/delete modals have colors that better represent actions
   - [ ] New image in Hero header (local/relatively pathed -> original site used web URL that is no longer available)
   - [ ] Navbar includes brand w/ logo
   - [ ] Columns along the right/left margin?
- [ ] "Featured Items" component displayed when first landing on website
   - [ ] Utilizes math random to grab different set of products on each reload

### Other Info
The only .env variable is the Server URL.  
Please contact me if you have any questions/recommendations/comments regarding this project.