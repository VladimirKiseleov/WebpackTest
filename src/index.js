import Post from './models/Post'
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import WebpackLogo from './assets/webpack-logo'

import './styles/styles.css'

const post = new Post('Webpack post title', WebpackLogo)

console.log('Post to string', post.toString())

// console.log('json', json)
// console.log('xml', xml)
// console.log('csv', csv)
