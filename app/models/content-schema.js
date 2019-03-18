let mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');

let ContentSchema = mongoose.Schema({

    Channel: {
        type: String
    },

    ContentMetadataId: {
        type: String
    },

    CreatedOn: {
        type: String
    },

    FileBlobId: {
        type: String
    },

    Format: {
        type: String
    },

    OriginalDescription: {
        type: String
    },

    ModifiedDescription: {
        type: String
    },

    Comments: {
        type: String
    },

    Published:{
        type: Boolean
    },

    Source: {
        type: String
    },

    Starred:{
        type: Boolean
    },

    PostId: {
        type: String
    },
});

ContentSchema.plugin(mongoosePaginate);
ContentSchema.set('collection', 'content');
module.exports = mongoose.model('Content', ContentSchema);