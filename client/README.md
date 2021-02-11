This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

After cloning, run `yarn install` in the directory, and then `yarn schema` to generate types for the Apollo Client fort GraphQL

## Coding Assessment

For this code assessment, we want to see you build a simple web app that integrates React, GraphQL and Django.

Provided is a basic project bootstrapped with Create React App and linked to the provided Django through Graphene/Apollo GraphQL.

### Overview

- By now you should have gotten a chance to play around with Cardea, and know that we have different lists on our platform, each with lots of different posts inside of them. If you haven't already, sign up here: `https://cardea.work/signup?code=Ca849xk3`
- We'll provide you with 8 jobs and 4 lists to add to the database, which you'll have to set up yourself.
- Each job will be associated with 1-3 lists. Your end goal should be a product that shows you a feed of the jobs in the list.
- Jobs can be found at the following airtable base: https://airtable.com/shrlh7aFQ5abFTuZW
- Lists can be found at the following airtable base: https://airtable.com/shrmha3fJHJLIk2l5

### Specs and Requirements

- All of the lists (and any information you choose to include about it) should be shown and selectable. Users should be able to select multiple lists.
- When a user selects a list, all the jobs in that list should appear.
- You shouldn't show all the information associated with a job - we're curious to see what information you choose to show and how you choose to show more information.
- If a user unselects a list, all the jobs that are associated with that list should dissappear. However, if a job has multiple lists associated with it, and one list is hidden, the job should still be shown.

### Tips

- Utilise hooks and state where suitable.
- All communication between the React frontend and Django backend should ideally occur through Graphene/Apollo GraphQL.
- The front end should be written using Typescript.

## Scripts

### Generating Types From Apollo for GraphQL: `yarn schema`

Running this will sync the Apollo client's types with the GraphQL endpoint (Django Backend)

### Running the app: `yarn start`

In the project directory, you can run:

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
