# LogiTrack
LogiTrack is a transportation/shipping management tool that allows users to create a database of customers and then book shipments on behalf of those customers. User's will book a shipment from origin to destination and the app will calculate total miles, display route on an embedded Google Maps, and save the shipment to the database. Future features will include a quoting function to get the cost of the shipment.

The back-end is built with Python Django, and the front-end is built with React.

## Tools required
* Node.js
* Python3
* pipenv
* PostgreSQL

## Quick Start 
#### (YOU WILL NEED TO CONFIGURE POSTGRESQL BEFORE STARTING)

* Create a local Postgres database with a user (password optional), and update the database default config in settings.py (/shipment_manager/shipment_manager/settings.py). code to edit below

```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'logitrack',
        'USER': 'replaceWithYourPSQLUsername',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '5432',
    }
}
```


```bash
# Start python virtual environment
pipenv shell

# Install dependencies
npm install
pip3 install

# Serve API on localhost:8000
python3 shipment_manager/manage.py runserver

# Run webpack (from root)
npm run dev

# Build for production
npm run build
```
