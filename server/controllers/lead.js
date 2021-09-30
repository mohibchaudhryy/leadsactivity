import express from 'express';

import leadModel from '../models/leadModel.js';


export const createLeads = async (req, res) => {
    const lead = req.body;
    const newLeadData = new leadModel(lead)
    try {
        const newUser = await newLeadData.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const fetchLeads = async (req, res) => { 
    
    try {
        const leadData = await leadModel.find();
        res.status(200).json(leadData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}   

export const updateBLead = async (req,res) => {
    try {
        const { id } = req.params;
        const updatedLead = (req.body);
        if(updatedLead.broadcastStatus === true) updatedLead.broadcastStatus = false;
        else updatedLead.broadcastStatus = true;
        const LEAD = await leadModel.findByIdAndUpdate(id,updatedLead,{new:true});
        res.status(200).json(LEAD);
    } catch (err) {
        res.status(409).json({ message: error.message });
    }
}

export const updateCLead = async (req,res) => {
    try {
        const { id } = req.params;
        const updatedLead = (req.body);
        if(updatedLead.conversionStatus) updatedLead.conversionStatus = false;
        else updatedLead.conversionStatus = true;
        const LEAD = await leadModel.findByIdAndUpdate(id,updatedLead,{new:true});
        res.status(200).json(LEAD);
    } catch (err) {
        res.status(409).json({ message: error.message });
    }
}