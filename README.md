# Color API

Tecnologías utilizadas: Node, Express, Mysql, Squalize.

## Installation

Use npm.

```bash
npm install
```

Levantar base de datos mysql.

```bash
docker-compose up -d
```

Configurar archivo de base de datos

```json
# config/config.json
"development": {
    "username": "root",
    "password": "123456",
    "database": "colors",
    "host": "localhost",
    "dialect": "mysql",
    "port": 6161
}
```

Correr migrations y seed.

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

RCorrer proyecto.

```bash
npm run start
ó
npm run dev
```

URL: [http://localhost:3000/](http://localhost:3000/)

## Enpoints

GET api/colors?page=0&size=5

Params: size = Cantidad de items a traer

```json
# api/colores?page=0&size=5
{
    "totalItems": 18,
    "totalPages": 4,
    "currentPage": 0,
    "colors": [
        {
            "id": 1,
            "name": "cerulean",
            "color": "#98B2D1",
            "pantone_value": "15-4020",
            "year": 2000,
            "createdAt": "2021-11-27T04:33:20.000Z",
            "updatedAt": "2021-11-27T04:33:20.000Z"
        },
        ...
     ]
}
```

GET api/colors/:id

```json
# api/colors/:id
{
  "id": 1,
  "name": "cerulean",
  "color": "#98B2D1",
  "pantone_value": "15-4020",
  "year": 2000,
  "createdAt": "2021-11-27T04:33:20.000Z",
  "updatedAt": "2021-11-27T04:33:20.000Z"
}
```

POST api/colors/create

```json
# api/colors/create
# body
{
  "name": "cerulean",
  "color": "#98B2D1",
  "pantone_value": "15-4020",
  "year": 2000
}
```

## DEMO

Use heroku and cleardb

GET colores = [https://apicolors.herokuapp.com/api/colores?page=0&size=10](https://apicolors.herokuapp.com/api/colores?page=0&size=10)

GET colorId = [https://apicolors.herokuapp.com/api/colores/5](https://apicolors.herokuapp.com/api/colores/5)

POST create color = [https://apicolors.herokuapp.com/api/colores/create](https://apicolors.herokuapp.com/api/colores/create)

## License

[MIT](https://choosealicense.com/licenses/mit/)
[gnxcode](https://gnxcode.dev/)
