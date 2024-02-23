#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

https://github.com/Grappler2010/organic-sphere
git push -f git@github.com:/Grappler2010/organic-sphere.git master:gh-pages

cd -
