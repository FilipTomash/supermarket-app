# Supermarket Receipt Analyzer - Backend (API)

# Business Case

A supermarket requested a software solution for retrieving and analyzing receipt details. The goal is to generate reports on the number of domestic and imported products purchased by customers.

# Features

- Built using TypeScript and Express.
- Retrieves receipt details from a provided link.

# Products Service

This is a simple service for fetching products. The purpose of this service is to retrive a receipt and its details from a server that the supermarket already has.

# Requirements

- `npm`
- `node` >= 18

# Installation

Clone this repository.
Navigate to the API directory.
Run `npm install` to install dependencies.

# Running

`'npm start` will start the application at
[http://localhost:7000](http://localhost:7000) (check `app.ts` for changing the PORT if needed).

## Usage

Ensure the server is running.
Frontend (client) interacts with this API to retrieve and display data.

## Example requests

Request for fetching all products:

```
--request GET 'http://localhost:7000/products
```
