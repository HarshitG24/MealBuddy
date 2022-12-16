## **Project 4 -> rls/master branch of the repository**
## Submission (Project 3 -> Main branch of the repository)
**We have made the submission by November 22, 2022, aiming for the bonus points. We have made the google submission and also the other necessary requirements.**

**Author:**
 Harshit Gajjar Mihir Mesia

**Website Link**
[Link](https://mealbuddy-x92q.onrender.com/)

**Youtube Link**
[Youtube](https://www.youtube.com/watch?v=vj3oS_5a66M&ab_channel=HarshitGajjar)

**Slides**
[Slides](https://docs.google.com/presentation/d/13leVTSvY1sIaHzoZYnJ5vLZ7HNV_9DFMHV48U03RE7U/edit?usp=sharing)

**Design Document**
[Design Document](https://docs.google.com/document/d/1DDK2ADNOKnGaH6Qo7wP_p3DGL8feCABHwNzO892O0y8/edit)

**Project Objective:**
 A Fast food delivery application for user’s to order delicious , mouth-watering fast foods such as Pizza and Burger. The website allows users to customize their own pizza/burger and place the order. The website shows the calories for each food item, to help users track the calories they would intake. The users can see their recent order, wishlist, calories consumed so far and much more. The project is intended to get experience working with MongoDB, Express, React and nodeJS, making a MERN stack web application.


## Installation and running it in local monodb compass (it uses mongoimport)
1. Clone the repository
2. Open it in your favourite editor
3. Start the mongo local server
4. Run **yarn run installDb**
5. Run **yarn install**
6. Run **yarn start**
7. cd frontend
8. Run **yarn install**
9. Run **yarn start**
10. It will take you to localhost://3000

Note (for local running): for the app to work on local, replace the line 39 on package.json of frontend with this **http://localhost:4200** instead of **https://mealbuddy.onrender.com**


## CRUD OPERATIONS
**Harshit Gajjar**
1. **CREATE** -> Whenever a user clicks on "Proceed to checkout" btn in the cart (right side), a new collection is created named "allOrders", if not exist. If exists it will be updated.
2. **Read** -> On the home page of the app, 1k synthetic records of pizza is read from a collection named "allData"
3. **Update** -> On settings page, user can update their name and password, so the necessary row is updated in collection named "users"
4. **Delete** -> On settings page, user have the option to delete their profile, so we remove their entry from the collection named "users".

**Mihir Mesia**
1. **CREATE** -> User can create a account and a new collection called "users" is created
2. **Read** -> On the Burger-builder page, all the data shown is fetched from collection named "BuildBurger"
3. **Update** -> On home page, user can add a Pizza to wishlist. If the collection named "whishlist" doesn't existed it's created, else it is updated
4. **Delete** -> On wishlist page, user have the option to delete their whislist, so we remove the entry from "whishlist" collection.

## Features
1. Login Page -> The user can login to the MealBuddy app or create account
2. Create Account Page -> The User can register in the website.
3. Home Page -> This page shows the 1k synthetic records of pizza for users to choose and play around with filters
4. Past Orders Page  -> Shows the history of all orders made by the loggedin user
5. Wishlist Page  -> Shows all the pizza which are wishlist by user
6. Pizza Builder Page  -> User can make their own pizza and see real time effects of addition of toppings with images
7. Burger builder Page -> User can make their own burger and see real time effects of addition of toppings with css
8. Calories page -> User can see the pie chart of the calories consumed by them
9. Settings Page -> Allows user to update their details


## Tech Requirements
1. ReactJS
2. CSS3
3. JavaScript
4. NodeJs
5. Express
6. MongoDB
7. Bycrypt

## Class Link
[CS5610 Web Development Course](https://johnguerra.co/classes/webDevelopment_fall_2022/)

## Screenshots
<img width="1706" alt="Screen Shot 2022-11-21 at 9 26 54 PM" src="https://user-images.githubusercontent.com/35658851/203232147-9a5d7e31-db5a-44ee-b60b-7ed163870f5e.png">
<img width="1707" alt="Screen Shot 2022-11-21 at 9 30 36 PM" src="https://user-images.githubusercontent.com/35658851/203232144-21d03f61-2a57-4226-bd6e-86cec8ef93c4.png">
<img width="1708" alt="Screen Shot 2022-11-21 at 9 30 46 PM" src="https://user-images.githubusercontent.com/35658851/203232138-d1f19662-f3b5-4092-b882-804918c5d1c5.png">
<img width="1707" alt="Screen Shot 2022-11-21 at 9 31 38 PM" src="https://user-images.githubusercontent.com/35658851/203232122-9bb91d6f-551e-4223-aa14-070890b87984.png">
<img width="1703" alt="Screen Shot 2022-11-21 at 9 32 44 PM" src="https://user-images.githubusercontent.com/35658851/203232110-d091a54a-aca8-424b-9ca4-a7794deab51d.png">
<img width="1707" alt="Screen Shot 2022-11-21 at 9 33 03 PM" src="https://user-images.githubusercontent.com/35658851/203232103-55e41a9f-4433-4f89-b0f5-a6998e981fd2.png">
<img width="1705" alt="Screen Shot 2022-11-21 at 9 33 18 PM" src="https://user-images.githubusercontent.com/35658851/203232094-9cb978a9-a5a5-4cfd-b5c8-8f605bfda778.png">


## Branching
We followed the concept of pair progarmming while working on this project
1. main - Contains the final code
2. master - Contains the final code
3. rls/harshit - All code commits by Harshit Gajjar
4. rls/mihir - All code commits by Mihir Mesia
5. rls/master - final changes for Project 4

## Pair review from Taohan
Overall awesome project and great implementation. I especially like how you are able to visualize the difference of ingredients in the creating process.
However, I noticed a few places that might some improvement (and not mentioned by previous comments).
