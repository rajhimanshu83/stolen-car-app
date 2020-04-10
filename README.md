# Report Stolen Cars App

# Demo 
* https://stolen-car-app.herokuapp.com/

# Application Stack

React/Redux
MongoDB
Node
Express

## Note: Authentication is not added, only API Endpoints are there
EntryPoint
* dev  http://localhost:8000/ 


## Pages
Homapage

Complains Page

## To run Project locally
Run the project --> npm run dev

## Workflow:
1. When the app runs officers are assigned automatically if available or free.
2. On Creating complains we are checking the officers that are online and not having a complain assined already, then we are assigning the complain to that officer.
3. When we change the complain status to completed, we are un-assigning that complain from the officer making his bucket empty for other cases.
4. Status of complain can be mark resolved only if it is assigned.

### API Endpoints

```
Add new user
method:post '/signin'  body: { "name":"Test","email":"xyz@gmail.com","password":"password"}

User Signin
method:post '/register' body: {"email":"xyz@gmail.com","password":"password"}

Get All Complains
method:get '/complains'

Get UnAssigned policeman
method:get '/unassigned/police'

Get Assigned policeman
method:get '/assigned/police'

To Submit Application
method:post post '/submit/complains' body = {
            "carModelNumber": "carModelNumber",
            "note": { "text": "note" },
            "cutomerPhoneNumber": "customerPhoneNumber",
            "customerName": "customerName",
        }

Change Complain Status
method:put '/update/complain/:id' body = {
            "id": "id",
            "complainId": "complainId",
        }

Auto Assign police
method:post '/police/assign/auto'

```

### Database Schema

## Police schema
```
name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  resolved: {
    type: Array,
    default: []
  },
  assignedCase: {
    type: String
  }

```

## Complains schema
```
  notes: {
    type: String,
    required: true
  },
  car_model: {
    type: String,
    required: true
  },
  customer_name: {
    type: String,
    required: true

  },
  customer_phone_number: {
    type: String,
    required: true
  },
  assignedTo: {
    type: String
  },
  is_completed: {
    type: Boolean,
    required: true,
    default: false
  },
  created_at: {
    type: Date,
    required:true
  },

```
