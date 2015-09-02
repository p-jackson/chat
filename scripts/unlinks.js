// Removes any symlinks we've put in the node_modules folder.
// If we don't do this then npm may look for and expect package.json files in
// there and think it should run an install on that too!

'use strict';

var fs = require('fs');
var path = require('path');

function unlink(linkPath) {
  return new Promise(function(resolve, reject) {
    function callback(e) {
      if (e && e.code !== 'ENOENT')
        reject(e);
      else
        resolve();
    }

    fs.unlink(path.join(__dirname, linkPath), callback);
  });
}

function removeNodeModuleLink(moduleName) {
  var j = path.join;
  return unlink(path.join('../node_modules', moduleName))
    .then(unlink(path.join('../build/node_modules', moduleName)));
}

removeNodeModuleLink('root')
  .then(removeNodeModuleLink('components'))
  .then(removeNodeModuleLink('higher-order-components'))
  .catch(function(e) {
    console.error(e);
  });
