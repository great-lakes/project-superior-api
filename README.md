# Project Superior API [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is the API for the next iteration of the Hanna Bot geared towards engaging with students at hackathon events.

## Features
* Automatically issuing Azure codes
* Mentor roster
* Project Tracking
* Student Inquiry Tracking

## Set up
### 1. Setting up a local database
1. Download and Install [Postgres 9.6](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) (Pick version 9.6.x, and Windows)
1. During the installation process, fill out the admin user and password.  (Password doesn't have to be fancy, since this is just living in your local computer)
1. Download and Install [OmniDB](https://www.omnidb.org/en/)
1. Open OmniDB and click on connections
1. Enter the following configuration: Technology: `postgresql`, Server: `localhost`, Port: `5432`, Database: `postgres`, User: (Your admin username), Title: `local-db`
1. click on the little Plug icon to test the connection.  You might need to input your password at this point.
1. When you are in, you will need to create a database.
1. expand your PostgresSQL, and you will see a Databases item.  Right click on it and select "Create Database"
1. A tab will be created on the right panel.  Change `name` in the SQL to a name for your database

### 2. Connecting to and populating the local database
1. clone this repo
1. run `npm install`
1. duplicate `.env.example` to `.env`
1. fill the DB_CONNECTION_STRING out, replacing each portion of the string with the right information 
1. run `npm run migrate:latest`
1. run `npm run seed:run`

### 3. Using GraphiQL Client
1. In your `.env` file, set a random value for `GRAPHQL_ACCESS_TOKEN`.  Again, doesn't have to be fancy, but that's your key for the graphiql client
2. Run `node server`
3. Go to `https://localhost:3000/graphiql?access_token=YOUR_ACCESS_TOKEN` to test the GraphQL API
