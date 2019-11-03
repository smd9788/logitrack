# LogiTrack
LogiTrack is a transportation/shipping management tool that allows users to create a database of customers and then book shipments on behalf of those customers. User's will book a shipment from origin to destination and the app will calculate total miles, display route on an embedded Google Maps, and save the shipment to the database. Future features will include a quoting function to get the cost of the shipment.

The back-end is built with Python Django, and the front-end is built with React.

## Quick Start

```bash
# Install dependencies
npm install

# Serve API on localhost:8000
python shipment-manager/manage.py runserver

# Run webpack (from root)
npm run dev

# Build for production
npm run build
```
