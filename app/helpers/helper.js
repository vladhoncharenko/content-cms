let getContentDataFilters = function (requestBody) {
    var req = {};
    req['Channel'] = requestBody.channel;
    req['Published'] = false;

    if (requestBody.source != 'All')
        req['Source'] = requestBody.source;
    if (requestBody.type != 'All')
        req['Format'] = requestBody.type;
    if (requestBody.withCommentsOnly)
        req['Comments'] = { $ne: "" };
    if (requestBody.withModDescOnly)
        req['ModifiedDescription'] = { $ne: "" };
    if (requestBody.starredOnly)
        req['Starred'] = requestBody.starredOnly;
    if (requestBody.publishedOnly)
        req['Published'] = requestBody.publishedOnly;

    return req;
};

module.exports = {
    getContentDataFilters: getContentDataFilters
};