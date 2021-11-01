const { Post } = require('../models');

const postData = [{
    title: 'Example 1',
    content: 'Example description of project.',
    user_id: 1

},
{
    title: 'Example 2',
    content: 'Example description of project.',
    user_id: 2
},
{
    title: 'Example 3',
    content: 'Example description of project.',
    user_id: 3
}
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;