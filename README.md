# sample-vue3
https://sample-vue3.netlify.app/login

This is a sample project written in Vue 3 with class-style components, typescript and Netlify functions for the backend. MondoDb Atlas is the database.
## Project setup
```
npm install
```

## In two terminals:
### Frontend. Compiles and hot-reloads for development
```
npm run serve
```
#### Lambda. Compiles and hot-reloads for development
```
netlify-lambda serve src/lambda --config ./webpack.lambda.js
```

### Frontend and Lambda. Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Strongly suggested to install MongoDb Atlas extension in VSCode.
For the database you will only need one cluster with one collection inside, called users.

### Rename .env to .env.local and put all your env keys there. Production keys should be in Netlify
For the database you will only need one cluster with one collection inside, called users.

