// Include Dependencies.
const path = require('path');

const fastify = require('fastify')({
  logger: true,
});

// Declare Static Folder.
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '/public'),
  prefix: '/',
});

// Run the server!
fastify.listen(8080, (err, address) => {
  if (err) throw err;
  fastify.log.info(`🚀 Server listening on ${address}`);
});
