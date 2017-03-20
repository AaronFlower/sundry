(function(window, document) {
    var config = {
        path: './js'
    }
    // 依次加载所有 module
    var require = function(modulesStr) {
        var modules = modulesStr.split(',')
        modules.forEach(function(module) {
            module = module.trim()
            var script = document.createElement('script')
            script.src = config.path + '/' + module + '.js'
            console.log(config.path + '/' + module + '.js')
            document.body.appendChild(script)
        })
    }
    require.prototype.provide = function() {
        console.log('provide ...')
    }
    var require = function(modulesStr) {
        return (function(modulesStr) {
            var modules = modulesStr.split(',')
            var promises = []
            modules.forEach(function(module) {
                promises.push(new Promise(function(resolve, reject) {
                    module = module.trim()
                    var script = document.createElement('script')
                    script.src = config.path + '/' + module + '.js'
                    script.onload = function() {
                        console.log(module, ' loading is resolved.');
                        resolve()
                    }
                    console.log(config.path + '/' + module + '.js')
                    document.body.appendChild(script)
                }))
            })
            return Promise.all(promises)
        })(modulesStr);
    }
    window.require = require
})(window, document);