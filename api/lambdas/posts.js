const posts = [
    {
        user: '1',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        user: '2',
        message:
            'Etiam faucibus nulla nisl, nec pharetra tellus sollicitudin a. ',
    },
    {
        user: '1',
        message: 'Morbi imperdiet bibendum dapibus.',
    },
    {
        user: '2',
        message: 'Sed in rutrum quam.',
    },
    {
        user: '2',
        message: ' Interdum et malesuada fames ac ante ipsum primis in.',
    },
]

export const getPosts = () => {
    return posts
}

export const getPostsPerUser = userId => {
    return posts.filter(p => p.user === userId)
}
