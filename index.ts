const pulumi = require('@pulumi/pulumi')
const aws = require('@pulumi/aws')
const awsx = require('@pulumi/awsx')

import lambdas from './api/lambdas'

const routes = [
    // Serve static files from the `www` folder (using AWS S3)
    {
        path: '/',
        localPath: './frontend/build',
    },
    ...lambdas,
]

// Create a public HTTP endpoint (using AWS APIGateway)
const endpoint = new awsx.apigateway.API('nginx-lambdas', {
    routes,
})

// Export the public URL for the HTTP service
exports.url = endpoint.url
