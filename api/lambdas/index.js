import { getUser } from './users'
import { getPosts, getPostsPerUser } from './posts'

const lambdas = [
    {
        path: '/users',
        method: 'GET',
        eventHandler: (req, ctx, cb) => {
            const users = getUser()
            cb(undefined, {
                statusCode: 200,
                body: Buffer.from(JSON.stringify({ users }), 'utf8').toString(
                    'base64'
                ),
                isBase64Encoded: true,
                headers: { 'content-type': 'application/json' },
            })
        },
    },
    {
        path: '/posts',
        method: 'GET',
        eventHandler: (req, ctx, cb) => {
            const posts = getPosts()
            cb(undefined, {
                statusCode: 200,
                body: Buffer.from(JSON.stringify({ posts }), 'utf8').toString(
                    'base64'
                ),
                isBase64Encoded: true,
                headers: { 'content-type': 'application/json' },
            })
        },
    },
    {
        path: '/posts/{id}',
        method: 'GET',
        eventHandler: (req, ctx, cb) => {
            const { id } = req.params
            const posts = getPostsPerUser(id)

            cb(undefined, {
                statusCode: 200,
                body: Buffer.from(JSON.stringify({ posts }), 'utf8').toString(
                    'base64'
                ),
                isBase64Encoded: true,
                headers: { 'content-type': 'application/json' },
            })
        },
    },
]

export default lambdas
