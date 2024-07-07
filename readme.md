# para iniciar la API

## base de datos y aplicacion
sudo docker-compose up -d

## crear base de datos
npm run db:create

## correr migracion
npm run migrations-dev:run

## revertir migracion
npm run migrations-dev:revert

## opcional:
si en el `docker-compose.yml` está comentado el servicio de la apliación
entonces:
npm run development


