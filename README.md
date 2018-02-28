# Wizard App
React Simple Form Wizard with Validation


Uses:
JSON Server https://github.com/typicode/json-server to update json data file.
SASS
Webpack


## Notes
Used a boilerplate for quick-start. Kept the convention, dir structure, etc... because it was easier but also as an exercise in adhering to coding style.

Based on webpack+react+json-server Boilerplate by 
https://github.com/nickjazz/webpack-react-json-server

Decided on this approach as a guideline for organizing the components - https://medium.com/@l_e/writing-a-wizard-in-react-8dafbce6db07



## simple webpack+react+json-server demo

### Main tools
* eslint
* json-server
* sass
* webpack
* faker
* jQuery
* lodash
* react
* react-router
* LiveReload

About
====================
![demo](http://i.imgur.com/Nw2ecNG.png)

- Use json-server as CRUD api server. work perfectly with Postman.
- faker and lodash create a random data we need to test.
- webpack everything for web browser (sass, react, eslint check), output two files, app.js & app.css
- React do everything on front end, included react-router do all router control.
- Add and Destroy user.
- Destroy action just a mock-action, need destroy actual data on server by ajax call.

Usage
====================
* npm install
* node server.js
* webpack --watch for dev
