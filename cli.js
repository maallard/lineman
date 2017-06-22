#!/bin/sh
":" //# comment; exec /usr/bin/env node --stack-size=4920 "$0" "$@"

require('coffee-script');
var path = require('path'),
    linemanDir = require('./finds-lineman-dir').find();

require(path.join(linemanDir, "lib", "cli", "main"))();
