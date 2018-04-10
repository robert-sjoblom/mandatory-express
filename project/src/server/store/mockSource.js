const products = [
    {
        id: 1,
        name: 'JS 101',
        category: 'book'
    },
    {
        id: 2,
        name: 'Avancerad JS',
        category: 'book'
    }
];

class mockSource {
    getProducts() {
        return Promise.resolve(products);
    }

    getProduct(id) {
        return new Promise((resolve, reject) => {
            const found = products.find(product => product.id === +id);
            found ? resolve(found) : reject();
        });

    }

    addProduct({ category, name }) {
        const lastIndex = products.length - 1;
        const lastId    = products[lastIndex].id;
        const newProduct = {
            id: lastId + 1,
            category,
            name
        };
        products.push(newProduct);

        return Promise.resolve(newProduct);
    }

}

module.exports = mockSource;