# LogiTrack
LogiTrack is a transportation/shipping management tool that allows users to create a database of customers and then book shipments on behalf of those customers. User's will book a shipment from origin to destination and the app will calculate total miles, display route on an embedded Google Maps, and save the shipment to the database. Future features will include a quoting function to get the cost of the shipment.

The back-end is built with Python's Django on a PostgreSQL database. The front-end is built with React and Redux.

## Tools required
* Node.js
* Python3
* pipenv
* PostgreSQL

## Quick Start
If you want to work on this app for yourself follow these steps to begin:

## Preparation

1. Fork and clone this repository.
2. Create a new branch for your work and change into it.
3. Start python virtual environment with `pipenv shell`
4. Install dependencies with `npm install` and `pip3 install`
5. Configure your local PostgreSQL database:

* Create a local Postgres database with a user (password optional), and update the database default config in settings.py (/shipment_manager/shipment_manager/settings.py).
* Replace NAME with your database name, and USER with your database user. HOST is '' which defaults to localhost, but if you plan on deploying to a server, replace HOST with your deployed server url

```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'replaceWithYourDatabaseName',
        'USER': 'replaceWithYourPSQLUsername',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '5432',
    }
}
```

6. Run these commands as appropriate:

```bash
# Serve API on localhost:8000
python3 shipment_manager/manage.py runserver

# Run webpack (from root)
npm run dev

# Build for production
npm run build
```
