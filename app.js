const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv/config');

//Body Parser
app.use(express.json());
//Import Routes
const postsRoutes = require('./routes/postsUser');
const postRoutesComp = require('./routes/postCompany');
const postRoutesRoles = require('./routes/postRoles');
const postRouteStore = require('./routes/postStore');

app.use('/posts', postsRoutes);
app.use('/posts', postRoutesComp);
app.use('/posts', postRoutesRoles);
app.use('/posts', postRouteStore);

//Routes

app.get('/', (req, res) => {
	res.send('Welcome');
});

//Connect To DB
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
	() => console.log('Connected To Db'),
);

//Listen App
app.listen(3000);
