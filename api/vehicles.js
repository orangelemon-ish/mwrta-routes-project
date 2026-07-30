const http = require('http');

module.exports = (req, res) => {
    http.get('http://vc.mwrta.com/api/FR/0', (apiRes) => {
        let data = '';
        apiRes.on('data', chunk => data += chunk);
        apiRes.on('end', () => {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).send(data);
        });
    }).on('error', (err) => {
        res.status(502).json({ error: 'Failed to fetch from MWRTA API' });
    });
};
