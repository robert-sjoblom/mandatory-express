const express = require("express");

const store = require("../store");

const route = express.Router();

// GET /api/products

route.get("/posts", (req, res) => {
    store.getPosts()
        .then(posts => res.json({ posts }));

});

route.get("/posts/:id", (req, res) => {
    const postId = Number(req.params.id);
    store.getPost(postId)
        .then(post => res.json(post))
        .catch(error => {
            res.status(404).json(
                { error }
            );
        });
});

route.post("/posts", (req, res) => {
    const post = req.body;
    store.addPost(post)
        .then(newPost => res.json({ newPost }));
});

route.delete("/posts", (req, res) => {
    const { id } = req.body;
    store.deletePost(id)
        .then(del => res.json(del))
        .catch(error => {
            res.status(404).json(
                { error }
            );
        });
})

module.exports = route;
