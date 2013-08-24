express $1  --css less 
cd $1
mkdir ./build
mv ./* ./build/
mkdir -p ./src/routes

js2coffee ./build/app.js > ./src/app.coffee
js2coffee ./build/routes/index.js > ./src/routes/index.coffee
js2coffee ./build/routes/user.js > ./src/routes/user.coffee

rm -rf ./build/routes
rm ./build/app.js

