// models/Lead.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface ILead extends Document {
  name: string;
  email: string;
  phone: string;
  company?: string;
  package: string;
  message?: string;
  businessType: string;  // Changed from optional to required
  project: string;       // Changed from optional to required
  budget?: string;
  timeline?: string;
  referral?: string;
  agreeTerms: boolean;
  createdAt: Date;
  updatedAt: Date;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'lost';
}
const LeadSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },
  package: { type: String, required: true, default: 'MVP Development' },
  message: { type: String },
  businessType: { type: String },
  project: { type: String },
  budget: { type: String },
  timeline: { type: String },
  referral: { type: String },
  agreeTerms: { type: Boolean, required: true, default: false },
  source: { type: String, default: 'gudi-padwa-offer' },
  status: { type: String, enum: ['new', 'contacted', 'qualified', 'lost'], default: 'new' }
}, {
  timestamps: true
});

// Check if the model has already been compiled
export default mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);