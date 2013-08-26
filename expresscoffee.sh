express $1  --css less 
cd $1
echo `pwd`


mkdir ./build
mv ./* ./build/
mkdir -p ./src/routes
mkdir ./src/views

js2coffee ./build/app.js > ./src/app.coffee
js2coffee ./build/routes/index.js > ./src/routes/index.coffee
js2coffee ./build/routes/user.js > ./src/routes/user.coffee

rm -rf ./build/routes
rm ./build/app.js

touch ./package.json

echo $'{
  		\"name\": \"express-yourself\", 
  		\"version\": \"0.0.0\",
  		\"description\": \"express (your self) with coffee",
  		\"dependencies\": {
    		\"grunt\": \"~0.4.1\",
    		\"grunt-contrib-watch\": \"~0.5.2\",
    		\"haml\": \"~0.4.3\",
    		\"coffee-script\": \"~1.6.3\",
        \"brackets\": \"~0.3.0\"
  		}
  	}' > ./package.json

sudo npm install
cd ./build
sudo npm install