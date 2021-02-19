## Hello! welcome to my project 

As you have requested, I have configured a react-frontend Django-backend application
that uses the data you provided to emulate the cardea experience. 

1. All of the lists (and any information you choose to include about it) should be shown and selectable. Users should be able to select multiple lists.

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
