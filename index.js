const fs = require('fs'),
      nunjucks = require('nunjucks')

let loader = nunjucks.Loader.extend({
    async: true,
    getSource: function(name, cb) {
        fs.readFile(name, function(err, src) {
            cb(err, {
                src: src.toString(),
                path: name,
                noCache: true
            })
        })
    }
})

let env = new nunjucks.Environment(new loader())

const str = env.render('./master.njk', function(err, res) {
    console.log(err, res)
})