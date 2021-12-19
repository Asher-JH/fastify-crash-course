const fastify = require('fastify')({ logger: true });
const PORT = 5000;

fastify.get('/items', (req, reply) => {
    reply.send({test: "Hello"});
});

const start = async () => {
    try {
        await fastify.listen(PORT);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
