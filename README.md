## Hello! welcome to my project 

As you have requested, I have configured a react-frontend Django-backend application
that uses the data you provided to emulate the Cardea experience. 

### Requirements fulfilled

1. All of the lists (and any information you choose to include about it) should be shown and selectable. Users should be able to select multiple lists.
- You can do this by either clicking on the list image or the name. You can also deselect the lists the same way.

2. When a user selects a list, all the jobs in that list should appear.
- The list appears in the queue section

3. You shouldn't show all the information associated with a job - we're curious to see what information you choose to show and how you choose to show more information.
- You can click on one of the jobs to reveal more information

4. If a user unselects a list, all the jobs that are associated with that list should dissappear. However, if a job has multiple lists associated with it, and one list is hidden, the job should still be shown.
- This is done with some clever gql


### Additional features ( continuously added )

1. Metadata section about the current lists' information



## Getting started -- backend

The following steps should help you get the server up and running:

Create a virtual environment in the root directory, and activate it.

```
$ python3 -m venv venv
$ source venv/bin/activate
```

Upgrade pip and install the requirements.

```
$ pip install --upgrade pip
$ pip install -r requirements.txt
```

Migrate.

```
$ python manage.py migrate
```

Run the server.

```
$ python manage.py runserver
```

## Getting started -- frontend

To start the app in http://localhost:3000

```
$ cd client
$ yarn schema
$ yarn add
$ yarn start

```
