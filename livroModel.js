import mongoose from "mongoose";

const livroSchema = mongoose.Schema({
    titulo: String,
    autor: String,
    genero: String,
    codigo: Number,
    editora: String
})

export default mongoose.model('Livro', livroSchema)