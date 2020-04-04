const connection = require('../../database/connection');

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .orderBy('id', 'desc');

    return res.status(200).json(incidents);
  },
};
