const connection = require('../../database/connection');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [incidentsCount] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select(
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.state'
      );

    res.header('X-Total-Count', incidentsCount['count(*)']);

    return res.status(200).json({ incidents });
  },
  async create(req, res) {
    const { title, description, price } = req.body;

    const ongId = req.headers.authorization;

    const registeredOng = await connection('ongs')
      .where('id', ongId)
      .select('*')
      .first();

    if (!registeredOng) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    const [id] = await connection('incidents').insert({
      title,
      description,
      price,
      ong_id: ongId,
    });

    return res.status(200).json({ id });
  },
  async delete(req, res) {
    const { id } = req.params;

    const ongId = req.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ongId) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    await connection('incidents').where('id', id).delete();

    return res.status(204).send();
  },
};
