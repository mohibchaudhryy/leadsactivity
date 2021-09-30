import mongoose from 'mongoose';

const leadSchema = mongoose.Schema({
    leadName: { type: String, required:  true },
    company: { type: String, required:  true },
    domain: { type: String, required:  true },
    conversionStatus: { type: Boolean, required:  true },
    broadcastStatus: { type: Boolean, required:  true },
    createdBy: { type: String, required:  true },
    
})

export default mongoose.model('LeadData', leadSchema);

