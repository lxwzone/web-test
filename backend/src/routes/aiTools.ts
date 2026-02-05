import express from 'express'
import AITool from '../models/AITool'
import { protect, AuthRequest } from '../middleware/auth'

const router = express.Router()

router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const { category, sort = 'popularityScore' } = req.query

    const filter: any = {}
    if (category && category !== 'all') {
      filter.category = category
    }

    const tools = await AITool.find(filter)
      .sort({ [sort as string]: -1 })
      .limit(50)

    res.json(tools)
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Server error' })
  }
})

router.get('/categories', async (req: express.Request, res: express.Response) => {
  try {
    const categories = await AITool.distinct('category')
    res.json(categories)
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Server error' })
  }
})

router.get('/:id', async (req: express.Request, res: express.Response) => {
  try {
    const tool = await AITool.findById(req.params.id)
    
    if (!tool) {
      return res.status(404).json({ message: 'AI tool not found' })
    }

    res.json(tool)
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Server error' })
  }
})

export default router