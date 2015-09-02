'use strict';

var fs = require('fs');
var path = require('path');

function makeDir(dirPath) {
  return new Promise(function(resolve, reject) {
    fs.mkdir(path.join(__dirname, dirPath), function(e) {
      if (e && e.code !== 'EEXIST')
        reject(e);
      else
        resolve();
    });
  });
}

function makeLink(src, dst) {
  return new Promise(function(resolve, reject) {
    function callback(e) {
      if (e && e.code !== 'EEXIST')
        reject(e);
      else
        resolve();
    }

    fs.symlink(
      path.join(__dirname, src),
      path.join(__dirname, dst),
      'junction',
      callback
    );
  });
}

function makeNodeModuleLink(src, dst) {
  var j = path.join;
  return makeLink(j('..', src), j('../node_modules', dst))
    .then(makeLink(j('../build', src), j('../build/node_modules', dst)));
}

makeDir('../build')
  .then(makeDir('../build/node_modules'))
  .then(makeDir('../build/src'))
  .then(makeDir('../build/src/components'))
  .then(makeDir('../build/src/higher-order-components'))
  .then(makeNodeModuleLink('src/components', 'components'))
  .then(makeNodeModuleLink('src/higher-order-components', 'higher-order-components'))
  .then(makeNodeModuleLink('.', 'root'))
  .catch(function(e) {
    console.error(e);
  });
