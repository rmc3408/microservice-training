const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { Book } = require('../models/book');
const { bookPORT, mongoUri } = require('../constant');

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


mongoose.connect(mongoUri)
    .then(() => console.log('Connected to Book Database'))
    .catch(err => console.log(err));


app.get('/book', (req, res) => {
  Book.find().then((data) => res.json(data))
})

app.get('/book/:id', async (req, res) => {
  const id = req.params.id;
  
  try {
    const result = await Book.findById(id)
    res.json(result)
  } catch (error) {
    res.sendStatus(404)
  }
})

app.post('/book', async (req, res) => {
  const data = req.body;

  const newBook = new Book({ 
    title: data.title,
    author: data.author,
    pages: data.pages,
    publisher: data.publisher
  })
  await newBook.save()

  res.send('Book Created')
})

app.delete('/book/:id', async (req, res) => {
  const id = req.params.id;
  
  try {
    const result = await Book.findByIdAndDelete(id)
    res.json(result)
  } catch (error) {
    res.sendStatus(404)
  }
})

app.listen(bookPORT, () => {
  console.log(`Books service running on port ${bookPORT}`)
})