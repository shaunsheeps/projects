
const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')

//starting express/ declaring port
const server = express()
const PORT = 8000

//
const url = ''

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const article = []

        $('.fc-item__title', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            article.push({
                tile,
                url
            })
        })
        console.log(article)
    }).catch(err => console.log(err))



server.listen(PORT, () => console.log( `server running on port: ${PORT}`))
