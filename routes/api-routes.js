let helper = require('../app/helpers/helper');

module.exports = function (app, Content, fs) {
    app.post('/getContentData', (req, res) => {
        Content.paginate(helper.getContentDataFilters(req.body), { offset: req.body.offset, limit: req.body.limit, sort: { CreatedOn: -1 } }, function (err, content) {
            if (err) console.log(err);
            res.send(content);
        });
    });

    app.post('/updateContentData', (req, res) => {
        Content.findOneAndUpdate({ 'ContentMetadataId': req.body.ContentMetadataId }, req.body, function (err, content) {
            if (err) console.log(err);
            res.send(content);
        });
    });
}; 