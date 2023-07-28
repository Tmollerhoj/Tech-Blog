const User = require('./user');
const Post = require('./blogpost');


User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

module.exports = { User, Post };