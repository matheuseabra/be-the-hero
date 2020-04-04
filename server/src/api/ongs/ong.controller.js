const connection = require('../../database/connection');
const generateRandomID = require('../../utils/generateRandomId');

module.exports = {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');
    return res.status(200).json(ongs);
  },
  async create(req, res) {
    const { name, email, whatsapp, city, state } = req.body;

    const ongId = generateRandomID();

    await connection('ongs').insert({
      id: ongId,
      name,
      email,
      whatsapp,
      city,
      state,
    });

    return res.status(200).json({ ongId });
  },
};
