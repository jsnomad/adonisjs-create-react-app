# adonisjs-create-react-app

<p align="center"> 
<img src="https://res.cloudinary.com/jsnomad/image/upload/v1547050409/adonisjs-react.png">
</p>

Boilerplate/Starter Project for building APIs using [Adonisjs](https://github.com/adonisjs/adonis-framework), with a React frontend using [Create React App](https://github.com/facebook/create-react-app).

# Setup

Install AdonisJs CLI globally :

    npm i -g @adonisjs/cli

Then create the project :

    adonis new <name> --blueprint=jsnomad/adonisjs-create-react-app

Alternatively you can clone the project and install dependencies manually :

    git clone https://github.com/jsnomad/adonisjs-create-react-app.git
    npm install

Install React dependencies :

    cd front
    npm install

# Start

Run the following command to start the HTTP server :

    adonis serve --dev

Runs the React app in development mode :

    cd front
    npm start

Then you can access to the React App using :

    http://localhost:3000/

### Make API request

    fetch('/api/v1/***')

In development, the React development server will recognize that it’s not a static asset, and will proxy your request to `http://localhost:3333/api/v1/***` as a fallback.

# Production

Create a React production build :

    cd front
    npm run build

The build folder will be automatically moved in the Adonisjs public folder.

Then start the HTTP server using a process manager like pm2 (recommended) :

    pm2 start server.js

For better performance, consider using nginx as a reverse proxy (faster to server static assets).
