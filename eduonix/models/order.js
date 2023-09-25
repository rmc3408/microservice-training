const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.SchemaTypes.ObjectId, required: true },
  bookId: { type: mongoose.SchemaTypes.ObjectId, required: true },
  initialDate: { type: Date, require: true },
  deliveryDate: { type: Date, require: true }
});

exports.Order = mongoose.model('Order', orderSchema);