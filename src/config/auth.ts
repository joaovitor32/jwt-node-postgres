require('dotenv').config()

export default {
    jwt:{
        secret:process.env.secret||'default',
        expires:'1d'
    }
}