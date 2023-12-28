import { response } from "express";

const usuarioGet = (req, res) => {
    res.json({
        msg: 'get api controlador'
    })
}

const usuarioPost = (req, res) => {
    // const { nombre, edad } = req.body;
    const body = req.body;
    res.json({
        msg: 'post api controlador',
        body
        // nombre, 
        // edad,
    })
}
const usuarioPut = (req, res) => {
    res.json({
        msg: 'put api controlador'
    })
}

export {
    usuarioGet, 
    usuarioPost, 
    usuarioPut, 
}