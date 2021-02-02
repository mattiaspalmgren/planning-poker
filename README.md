# planning-poker

App to facilitate planning poker sessions.

## Use flow
Sessions is crated by visiting `/` and providing a name 
of the session - which will cover a specifik task.

The user is then pushed to a specifik session page which represents the current votes for the specifik session.
The session pages also presents a link for the session which can be shared with others to
collect votes.
The user choses a point amoong a set of points, reflecting the size of the task which the session is concerning.

A bar chart is updated reflecting the distribution of the current votes from all users which has joined the specific session.
The user can only vote once, but is permitted to change the vote.

## Prerequisite to run
`Docker` and `docker-compose` needs to be installed on the system.

## How to build
To build docker images for server and client app:
```
docker-compose build
```

## How to run 
To run all required docker images
```
docker-compose up
```

Visit `localhost:3000` in a browser

## Some cutted corners
- Everything will always work as expected (no error handling) :upside_down_face:  
- No (1) tests
