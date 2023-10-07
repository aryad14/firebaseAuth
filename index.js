import express, { urlencoded } from 'express'
import writeData from './db.js';

const app = express();

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/auth/createUser', async (req, res) => {
    const data = await req.body;
    writeData(data.name, data.mail, data.pass);
})

app.listen('8000', () => {
    console.log('App Started');
})
