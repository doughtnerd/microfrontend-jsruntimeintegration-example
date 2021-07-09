docker-compose down -v --remove-orphans

cd recipe-app
yarn install
yarn build:webpack
cd ..

cd recipe-book-app
yarn install
yarn build:webpack
cd ..

rm -rdf asset-server/*

cp -r recipe-app/dist/assets/js/* asset-server
cp -r recipe-book-app/dist/assets/js/* asset-server

docker-compose up --build