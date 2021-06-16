const { Router } = require('express');

const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        name: 'Arturo',
        website: 'arturo.com'
    };
    res.json(data);
});  

module.exports = router;