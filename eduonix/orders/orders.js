const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { Order } = require('../models/order');
const { orderPORT, customerPORT, bookPORT, mongoUri, localhostUri } = require('../constant');
const { default: axios } = require('axios');


const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


mongoose.connect(mongoUri)
    .then(() => console.log('Connected to Order Database'))
    .catch(err => console.log(err));


app.get('/order', (req, res) => {
  Order.find().then((data) => res.json(data))
})

app.post('/order', async (req, res) => {
  const data = req.body;

  const newOrder = new Order({ 
    customerId: new mongoose.Types.ObjectId(data.customerId),
    bookId: new mongoose.Types.ObjectId(data.bookId),
    initialDate: Date.now(),
    deliveryDate: data.deliveryDate
  })
  await newOrder.save()

  res.send('Order Created Sucessful')
})


app.get('/order/:id', async (req, res) => {
  const id = req.params.id;
  
  try {
    const orderData = await Order.findById(id)

    const customerUrl = localhostUri + customerPORT + '/customer/' + orderData.customerId.valueOf();
    const bookUrl = localhostUri + bookPORT + '/book/' + orderData.bookId.valueOf();

    const customerPromise = await axios.get(customerUrl)
    const customerData = await customerPromise.data

    const bookFound = await axios.get(bookUrl)
    const bookData = await bookFound.data

    const order = {
      customer: customerData,
      book: bookData,
      initialDate: orderData.initialDate,
      deliveryDate: orderData.deliveryDate
    }
 
    res.json(order)
  } catch (error) {
    res.sendStatus(404)
  }
})



app.listen(orderPORT, () => {
  console.log(`Order service running on port ${orderPORT}`)
})