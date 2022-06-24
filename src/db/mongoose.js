const mongoose = require('mongoose');
const Comment = require('../models/comment.model');
const User = require('../models/user.model');
const commentData = require('../utils/comments.json');
const userData = require('../utils/users.json');
const config = require('../config');

(async () => {
    try {
        await mongoose.connect(config.db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true,
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            family: 4
        });

        console.log("database connected...");

        console.log(process.env.NODE_ENV);

        // seed data
        if(process.env.NODE_ENV !== 'production'){
            await Comment.deleteMany();
            await User.deleteMany();

            await Comment.insertMany(commentData);
            await User.insertMany(userData);

            console.log("database seeded...");
        }

    } catch (error) {
        console.log(error);
    }
})();