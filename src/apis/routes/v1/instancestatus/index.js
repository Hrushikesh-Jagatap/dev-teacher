const express = require('express');
const router = express.Router();
const updateinstancestatusController = require('@controllers/v1/instancestatus')
router.put('/updateinstancestatus/:userId', async (req, res, next) => {
    try {
        const result = await updateinstancestatusController.updateInstanceDetailsById(req, res, next);
    } catch (error) {
        console.error(error);
        next(error);
    }
});
module.exports = router;
