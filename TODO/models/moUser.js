import mongoose, { mongo } from "mongoose";
const {Schema} = mongoose

export const userSchema = new Schema({
    name:{type: String, require: true},
    email:{type: String, require: true},
    senha: {type: String, require: true},
}, {timestamps:true})

export const User = mongoose.model('USer', userSchema)