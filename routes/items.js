const { getItems, getItem } = require('../controllers/items');

// Item schema
const Item = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
    },
};

// Options for get all items
const getItemsOps = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item,
            },
        },
    },
    handler: getItems,
};

// Options for getItem
const getItemOpts = {
    schema: {
        response: {
            200: Item,
        },
    },
    handler: getItem,
};

function itemRoutes(fastify, options, done) {
    // GET ALL ITEMS
    fastify.get('/items', getItemsOps);

    // GET SINGLE ITEMS
    fastify.get('/items/:id', getItemOpts);
    done();
}

module.exports = itemRoutes;
