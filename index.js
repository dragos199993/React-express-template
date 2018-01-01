import express from 'express';

let app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, name: "Dragos Nedelcu"},
        {id: 2, name: "Madalina Chituta"}
    ]
    res.send(customers);
})

app.listen(4000, () => console.log('Server running on 4000...'));