import mongoose from 'mongoose';

const proplanSchema = mongoose.Schema({
   name: String,
   email: String,
   gender: String,
   age: String,
   address: String
});

export default mongoose.model('Pro Plan', proplanSchema);