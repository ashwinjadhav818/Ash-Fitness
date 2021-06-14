import mongoose from 'mongoose';

const queriesSchema = mongoose.Schema({
   email: String,
   message: String
});

export default mongoose.model('Queries', queriesSchema);