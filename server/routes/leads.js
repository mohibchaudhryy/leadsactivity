import express from 'express';

import { fetchLeads, createLeads, updateBLead, updateCLead } from '../controllers/lead.js';

const router = express.Router();

router.post('/new',createLeads);
router.get('/data',fetchLeads);
router.patch('/b/:id',updateBLead)
router.patch('/c/:id',updateCLead)

export default router;