const express = require('express');
const app = express();

/**
 * @param {express.Request} req
 * @param {express.Response} _ 
 * @param {express.NextFunction} next
 */
function attachUser(req, _, next) {
    req.user = {
        userId: '123',
        username: 'jsdoc-fan',
        refreshTokenVersion: 1,
        otherInfo: "idk",
    };
    next();
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
function getUser(req, res) {
    const user = req.user;
    res.json({ user });
}

app.use(attachUser);
app.get('/user', getUser);

app.listen(3000, () => {
    console.log('Express + JSDoc example running on port 3000');
});
