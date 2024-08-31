import {model, models, Schema} from 'mongoose'

const ImageSchema = new Schema({
    title: {
        type: 'string', 
        required: true
    },
    transformationType: {
        type: 'string', 
        required: true
    },
    publicID: {
        type: 'string', 
        required: true
    },
    secureUrl: {
        type: 'URL', 
        required: true
    },
    width: {
        type: 'number'
    },
    height: {
        type: 'number'
    },
    config: {
        type: 'object'
    },
    transformationUrl: {
        type: 'URL'
    },
    aspectratio: {
        type: 'String'
    },
    color: {
        type: 'String'
    },
    prompt: {
        type: 'String'
    },
    author: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    createdAt: {
        type: 'Date', 
        default: new Date
    },
    updatedAt: {
        type: 'Date', 
        default: new Date
    },
})

const Image = models?.Image || model('Image', ImageSchema)

export default Image
