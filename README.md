
# Readable APP

Readable is a content and comment web app. User are able to post content to predefined categories, comment on their post and other users' posts, and vote on posts and comments. Users also are able to delete posts and comments. 


## Getting Started and Installing

To run this project right away:

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`
* Install and start the Client 
    - `cd client`
    - `npm install`
    - `npm start`



# Client 

Using the server, I built a React/Redux front end for the application, with react bootstrap for the Styling.

## Views

### Default (Root)
- List all available categories, which should link to a category view for that category
- List all of the posts
- Have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
- Have a control for adding a new post
![default](../client/public/images/default.png)

### Category View
- Identical to the default view, but filtered to only include posts with the selected category
![category](../client/public/images/category.png)

### Post Detail View
- Show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score
- List all of the comments for that post
- Have controls to edit or delete the post
- Have a control to add a new comment.
- Comment form  
- Comments can be edited or deleted
![post](../client/public/images/post.png)


### Create/Edit View
- Have a form to create new post or edit existing posts
- When editing, existing data should is populated in the form
![edit](../client/public/images/edit.png)



## API Server
The Api-Server repository includes the code for the backend API Server that I used to develop and interact with the front-end portion of the project. It was provided by the Udacity React Course. 

### Data

There are three types of objects stored on the server:
- Categories
- Posts
- Comments


Information about the API server and how to use it can be found in its [README file](api-server/README.md).
