const { Comment } = require('../models');

const commentData = [{
    comment_text: "WOW!",
    user_id: 1,
    post_id: 1
},
{
    comment_text: "Out of this world!",
    user_id: 2,
    post_id: 2
},
{
    comment_text: "truly amazing!",
    user_id: 3,
    post_id: 3
}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;