# Accounts and Calls Service

These are 2 simple services for creating and fetching accounts and calls linked to the accounts. The intention for this project is to be worked on together with the candidate during an interview in a pair programming scenario.

# Requirements

* `yarn` or `npm`
* `node` >= 16

# Installation

`yarn` / `npm install`

# Running

`yarn start` / `npm start` will start the application at
[http://localhost:7000](http://localhost:7000) (check `app.ts` for changing the PORT if needed).

## Example requests using curl

Request for fetching all accounts:

```
curl --location --request GET 'http://localhost:7000/accounts' --header 'Content-Type: application/json' 
```

Request for fetching all calls:

```
curl --location --request GET 'http://localhost:7000/calls' --header 'Content-Type: application/json' 
```

Request for fetching a call:

```
curl --location 'http://localhost:7000/calls/0dc3678c-552a-4d45-912f-6f7f9583026d'
```

Request for adding a new call:

```
curl --location 'http://localhost:7000/calls' \
--header 'Content-Type: application/json' \
--data '{
    "accountId": "5ce01a4f-bfc3-4f3c-8dab-703e03e12c00",
    "startTime": "2023-10-15T19:18:36.079Z",
    "endTime": "2023-10-15T19:30:36.079Z",
    "fromNumber": "046722223273",
    "toNumber": "046788873273"
}'
```
