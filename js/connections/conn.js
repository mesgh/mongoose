const m = require('mongoose');
console.log(m);
m.set('debug', true);
async function getConn() {
  await m.connect('mongodb://CRUD:IamCRUD@91.210.171.78/useless', { useNewUrlParser: true });
}
getConn().catch(() => console.error('Соединиться	с	БД	не	удалось.	На	этом	всё.'));
module.exports = m;