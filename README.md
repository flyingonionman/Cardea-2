## Getting started

The following steps should help you get the server up and running:

Create a virtual environment, and activate it.

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

## TODOs ???

Filter for the job list

Populate the list moreeeeee
Populate the jobs moree ( maybe with APIs )

Actual functionality when clicked

host it to Heroku ? ( Jesus fkin christ )
Allow users to click (playlist creator to see other playlists by them)