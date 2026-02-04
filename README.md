# running
to run this website follow the following steps:

## step 1.
clone this repo:
```bash
git clone git@github.com:frittesauce/code-challange.git
```

## step 2.
go inside of the newly cloned repo and start the backend:
```bash
cd ./code-challange/backend
npm run i
npm run dev
```

## step 3.
open the admin panel and make an admin user, you will use this to publish events.
inside the admin panel make sure that an events table exists and that users have permision to find events.

## step 4.
go into the frontend folder and make a file named .env, inside of here create 2 values.
```.env
NEXT_PUBLIC_API_URL="strapis url + /api"
NEXT_PUBLIC_BACKEND_URL="strapis url"
```
## step 5.
finally also start the frontend server
```bash
npm i
npm run dev
```
