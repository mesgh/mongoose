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
  async update({index, votes}) {
    const result = await Fw.updateOne({ index }, { $set: { votes } });
    return result;
  },
  async del(fields) {
    const result = await Fw.deleteOne(fields);
    return result;
  },
};
module.exports = CRUD;
