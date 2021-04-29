const { Fw } = require('../models/fw');

const CRUD = {
  async create(fields) {
    const frame = new Fw(fields);
    try {
      await frame.save();
    } catch (err) {
      console.error(err);
    }
    const result = await Fw.findOne(frame);
    return result;
  },
  async read() {
    const result = await Fw.find();
    return result;
  },
  async update() {
    const result = await Fw.find();
    console.log(result);
    return result;
  },
  async del() {
    const result = await Fw.find();
    console.log(result);
    return result;
  },
};
module.exports = CRUD;
