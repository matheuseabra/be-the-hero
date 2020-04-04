const api = require('./api');

const PORT = 4444;

api.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
