const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/users');
const { model } = require('mongoose');

const login=async(req,res=response)=>{

    res.json({
        msg:'login ok'
    })
    
}

module.exports={ login }
