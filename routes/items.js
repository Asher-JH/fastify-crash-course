const {
    getItems,
    getItem,
    addItem,
    deleteItem,
    updateItem,
} = require('../controllers/items');

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
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: { type: 'string' },
            },
        },
        response: {
            201: Item,
        },
    },
    handler: addItem,
};

// Options for updateItem
const updateItemOpts = {
    schema: {
        response: {
            200: Item,
        },
    },
    handler: updateItem,
};

// Options for deleteItem
const deleteItemOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                },
            },
        },
    },
    handler: deleteItem,
};

function itemRoutes(fastify, options, done) {
    // GET ALL ITEMS
    fastify.get('/items', getItemsOps);

    // GET SINGLE ITEMS
    fastify.get('/items/:id', getItemOpts);

    // ADD ITEM
    fastify.post('/items', postItemOpts);

    // DELETE ITEM
    fastify.delete('/items/:id', deleteItemOpts);

    // UPDATE ITEM
    fastify.put('/items/:id', updateItemOpts);

    done();
}

module.exports = itemRoutes;
