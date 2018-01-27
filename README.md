# Project Superior API [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is the API for the next iteration of the Hanna Bot geared towards engaging with students at hackathon events.

## Features
* Automatically issuing Azure codes
* Mentor roster
* Project Tracking
* Student Inquiry Tracking

## Development - Getting Started
### Database
1. Install Postgres 9.6
1. Create a database
1. duplicate .env.example to .env, and fill the DB_CONNECTION_STRING out
2. run `npm run migrate:latest`

### Add Pre Defined Seed Data
1. run `npm run seed:run`
