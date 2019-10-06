import express from 'express'

import { getUsers } from './lambdas/users'
import { getPostsPerUser, getPosts } from './lambdas/posts'

const app = express()
const port = 4000

app.get('/users', (req, res) => {
    const users = getUsers()
    res.json({ users })
})

app.get('/posts', (req, res) => {
    const posts = getPosts()
    res.json({ posts })
})

app.get('/posts/:id', (req, res) => {
    const { id } = req.params
    const posts = getPostsPerUser(id)
    res.json({ posts })
})

app.get('/', (req, res) => {
    res.json({
        api: [
            {
                path: '/users',
                payload: [
                    { id: 'string', first_name: 'string', last_name: 'string' },
                ],
            },
            {
                path: '/posts',
                payload: [{ id: 'string', message: 'string' }],
            },
            {
                path: '/posts/:id',
                payload: [{ id: 'string', message: 'string' }],
            },
        ],
    })
})

app.listen(port, () => console.log(`API is listening on port ${port}!`))
