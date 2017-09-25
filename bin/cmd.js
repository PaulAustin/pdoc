#! /usr/bin/env node
/*
Copyright (c) 2017 Paul Austin - SDG

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

console.log("run pdoc");

var walk = require('walk');
var fs = require('walk');

var options = {
  //* Don't follwing links, simple folders only.
  followLinks: false,
  //* Ignore pdoc config files
  filters: ['.psoc.json', '.pdoc.ignore']
};

var walker = walk.walk('.', options);

walker.on('file', function (root, fileStat, next) {
  console.log('file -', fileStat.name);
  next();
});

walker.on('directory', function (root, dirStat, next) {
  console.log('dir  - ', dirStat.name);
  next();
});

walker.on("end", function () {
  console.log('*** end ***');
});

//  fs.readFile(fileStats.name, function () {
// doStuff
//    next();
//  });
