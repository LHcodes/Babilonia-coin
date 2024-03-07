import express, { Router } from 'express'
import fs from 'fs'


const router = express.Router()

router.get('/', (req , res) => {
    res.render('cadastro')
})

router.post('/cadastrar', (req, res) => {
    
    const nome = req.body.nome
    const sal = req.body.sal
    const div = req.body.div
    const inv = req.body.inv

    const data = {nome, sal, div, inv}

    const dataJson = JSON.stringify(data)

    fs.writeFileSync('data.json', dataJson, 'utf8')

    console.log(data)


    res.redirect('/')
        
})




export default router