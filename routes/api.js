const express = require('express');
const router = express.Router();
const db = require('../db');

// Validation helper
const validateRequest = (data) => {
  const errors = [];

  if (!data.name || data.name.trim() === '') {
    errors.push('Name is required');
  }

  if (!data.mobile || !/^\d{10}$/.test(data.mobile)) {
    errors.push('Mobile must be a valid 10-digit number');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Email must be valid');
  }

  if (!data.service || data.service.trim() === '') {
    errors.push('Service must be selected');
  }

  return errors;
};

// Submit request
router.post('/submit-request', (req, res) => {
  const errors = validateRequest(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  db.addRequest(req.body, (err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.json({ success: true, message: 'Request submitted successfully' });
  });
});

// Get all requests
router.get('/requests', (req, res) => {
  db.getAllRequests((err, rows) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.json({ success: true, data: rows });
  });
});

// Delete request
router.delete('/requests/:id', (req, res) => {
  db.deleteRequest(req.params.id, (err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.json({ success: true, message: 'Request deleted successfully' });
  });
});

// Search by mobile
router.get('/search/:mobile', (req, res) => {
  db.searchByMobile(req.params.mobile, (err, rows) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.json({ success: true, data: rows });
  });
});

module.exports = router;
