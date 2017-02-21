const path = require('path');
const local = path.resolve.bind(path,__dirname);
const glob = require('glob');
const PATHS = {
    app: local( '../src' ),
    build: local( '../dist' ),
    nodeModule_dir:local('../node_modules')
    // sourceMap : Object.assign({
    //     'jquery': path.join(PATHS.nodeModule_dir, '/jquery/dist/jquery.min.js'),
    // }, require(local('../src','/sourcemap.json')))
}
let map =function () {
        let jsDir = local(PATHS.app, 'js')
        let entryFiles = glob.sync(jsDir + '/*.{js,jsx}')
        let map = {}
        entryFiles.forEach((filePath) => {
            let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
            map[filename] = filePath
        })
        return map

    }()

PATHS.entries = map;
module.exports = PATHS;

