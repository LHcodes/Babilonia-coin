import express from "express";
import exphbs from "express-handlebars";
import fs from "fs";

//routes
import cadastro from "./views/cadastro/cadastro.js";

const app = express()
const hbs = exphbs.create({})

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.use('/cadastro', cadastro)






app.get('/', (req, res) =>{

    if(fs.existsSync('data.json')){
        fs.readFile('data.json', 'utf-8', (err, data) => {
            if(err){
                console.log(err)
                return
            }
            const dt = JSON.parse(data)
            console.log(dt)
            res.render('home_log',{dt})
        })
        
    }else{
        res.render('home')
    }

    
})


app.listen(3000, (err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Servidor rodando")
})