import mongoose from 'mongoose';

const staterplanSchema = mongoose.Schema({
   name: String,
   email: String,
   gender: String,
   age: String,
   address: String
});

export default mongoose.model('Stater Plan', staterplanSchema);