# Bundler Identifier

**Summary**

A lightweight web app that will help automate the process by deciding what the next build number should be.

**Description**

A fast app to read and increase the build number for a given bundler identifier.

- Lookup the current build number for a given bundle identifier.
- Bump the build number for a given bundle identifier.
- Force set the build number for a given bundle identifier.
  
## Installation

```
$ yarn install
```

## Basic use

1. **Build scripts**

   ```
   yarn build
   ```
1. **Run**

   - `start:dev`: Run localy using webpack devServer
   - `start`: Run using a node/express server
  
### Environment variables:

```
API_URL=https://sagomini-challenge-api.herokuapp.com/api
```

### Tech Stack

react.js
redux
node/express.js