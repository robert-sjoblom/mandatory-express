const products = [
    {
        id: 1,
        name: "JS 101",
        category: "book"
    },
    {
        id: 2,
        name: "Avancerad JS",
        category: "book"
    }
];

const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
];
class mockSource {
    getProducts() {
        return Promise.resolve(products);
    }
    getProduct(id) {
        return new Promise((resolve, reject) => {
            const found = products.find(product => product.id === id);
            found ? resolve(found) : reject();
        });

    }
    addProduct({ category, name }) {
        const lastIndex = products.length - 1;
        const lastId = products[lastIndex].id;
        const newProduct = {
            id: lastId + 1,
            category,
            name
        };
        products.push(newProduct);
        return Promise.resolve(newProduct);
    }

    getPosts() {
        return Promise.resolve(posts);
    }
    getPost(id) {
        return new Promise((resolve, reject) => {
            const found = posts.find(post => post.id === id);
            found ? resolve(found) : reject();
        });
    }

    addPost({ userId, title, body }) {
        const lastIndex = posts.length - 1;
        const lastId = posts[lastIndex].id;
        const newPost = {
            userId,
            id: lastId + 1,
            title,
            body
        };
        posts.push(newPost);
        return Promise.resolve(newPost);
    }
    deletePost(id) {
        return new Promise((resolve, reject) => {
            const index = posts.findIndex(item => item.id === id);
            (index !== -1) ? resolve(posts.splice(index, 1)[0]) : reject({ error: "No such id" });
        });
    }
}

module.exports = mockSource;