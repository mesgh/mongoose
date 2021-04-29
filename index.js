const express = require('express');
const CRUD = require('./js/operations/CRUD');
const app = express();

app
  .use(express.static('./dist'))
  .post('/api/mongo/create', async (req, res) => {
    let body = '';
    req
    .on('data', chunk => {
      body += chunk.toString();
    })
    .on('end', async () => {
      const frame = JSON.parse(body);
      const result = await CRUD.create(frame);
      res
        .status(201)
        .send(result);
    });
  })
  .get('/api/mongo/read', async r => {
    const result = await CRUD.read();
    r.res
      .status(200)
      .send(result);
  })
  .post('/api/mongo/update', async (req, res) => {
    let body = '';
    req
    .on('data', chunk => {
      body += chunk.toString();
    })
    .on('end', async () => {
      const frame = JSON.parse(body);
      await CRUD.update(frame);
      res
        .status(200)
        .end();
    });
  })
  .post('/api/mongo/del', async (req, res) => {
    let body = '';
    req
    .on('data', chunk => {
      body += chunk.toString();
    })
    .on('end', async () => {
      const frame = JSON.parse(body);
      await CRUD.del(frame);
      res
        .status(204)
        .end();
    });
  })
  .use(r => {
    r.res
      .status(404)
      .set({
        'Content-Type': 'text/html; charset=utf-8'
      })
      .send('<h1>Не найдено!</h1>');
  })

  .listen(process.env.PORT || 80);