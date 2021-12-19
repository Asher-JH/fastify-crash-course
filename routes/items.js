const { getItems, getItem, addItem } = require('../controllers/items');

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

// Options for postItem
const postItemOpts = {
    schema: {
        response: {
            201: Item,
        },
    },
    handler: addItem,
};

function itemRoutes(fastify, options, done) {
    // GET ALL ITEMS
    fastify.get('/items', getItemsOps);

    // GET SINGLE ITEMS
    fastify.get('/items/:id', getItemOpts);

    // ADD ITEM
    fastify.post('/items', postItemOpts);

    done();
}

module.exports = itemRoutes;
