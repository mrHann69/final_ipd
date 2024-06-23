# para iniciar la API

## base de datos y aplicacion
sudo docker-compose up -d

## crear base de datos
npm run dbhotel:create
npm run dbflight:create

## correr migracion
npm run migrations-devhotel:run
npm run migrations-devflight:run

## revertir migracion
npm run migrations-devhotel:revert
npm run migrations-devflight:revert


