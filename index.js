const express = require('express');
const CRUD = require('./js/operations/CRUD');
const app = express();

app
  .use(express.static('./dist'))
  .get('/api/mongo/create', async r => {
    const { frame } = r.req
    const result = await CRUD.create(frame);
    r.res
      .status(200)
      .send(result);
  })
  .get('/api/mongo/read', async r => {
    const result = await CRUD.read();
    r.res
      .status(200)
      .send(result);
  })
  .get('/api/mongo/update', async r => {
    const result = await CRUD.read();
    r.res
      .status(200)
      .send(result);
  })
  .get('/api/mongo/del', async r => {
    const result = await CRUD.read();
    r.res
      .status(200)
      .send(result);
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