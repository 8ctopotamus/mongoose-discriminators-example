const mongoose = require('mongoose');
const db = require('./models')

mongoose.connect('mongodb://localhost/discrmExple', {useNewUrlParser: true});

// db.Book.create({
//   author: 'Book Author 1',
//   title: 'Book Title 1',
//   date_added: Date.now()
// })
//   .then(newBook => console.log(newBook))
//   .catch(err => {
//     console.log(err)
//     process.exit(0)
//   })

// const bookCount = db.Book.count().then(c => console.log(c))
