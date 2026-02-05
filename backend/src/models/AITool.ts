import mongoose, { Document, Schema } from 'mongoose'

export interface IAITool extends Document {
  name: string
  category: string
  description: string
  popularityScore: number
  monthlyUsers: number
  website: string
  features: string[]
  createdAt: Date
}

const aiToolSchema = new Schema<IAITool>({
  name: {
    type: String,
    required: [true, 'Please provide a tool name'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
    enum: ['Productivity', 'Development', 'Design', 'Research', 'Writing']
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
    trim: true
  },
  popularityScore: {
    type: Number,
    required: [true, 'Please provide a popularity score'],
    min: 0,
    max: 100
  },
  monthlyUsers: {
    type: Number,
    required: [true, 'Please provide monthly users count'],
    min: 0
  },
  website: {
    type: String,
    required: [true, 'Please provide a website URL'],
    trim: true
  },
  features: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
})

aiToolSchema.index({ popularityScore: -1 })
aiToolSchema.index({ category: 1, popularityScore: -1 })

export default mongoose.model<IAITool>('AITool', aiToolSchema)