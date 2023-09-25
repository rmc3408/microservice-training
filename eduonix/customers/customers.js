const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { Customer } = require('../models/customer');
const { customerPORT, mongoUri } = require('../constant');

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


mongoose.connect(mongoUri)
    .then(() => console.log('Connected to Customer Database'))
    .catch(err => console.log(err));


app.get('/customer', (req, res) => {
  Customer.find().then((data) => res.json(data))
})


app.get('/customer/:id', async (req, res) => {
  const id = req.params.id;
  
  try {
    const result = await Customer.findById(id)
    res.json(result)
  } catch (error) {
    res.sendStatus(404)
  }
})

app.post('/customer', async (req, res) => {
  const data = req.body;

  const newUser = new Customer({ 
    name: data.name,
    age: data.age,
    city: data.city
  })
  await newUser.save()

  res.send('Customer User Created')
})

app.listen(customerPORT, () => {
  console.log(`Customer service running on port ${customerPORT}`)
})