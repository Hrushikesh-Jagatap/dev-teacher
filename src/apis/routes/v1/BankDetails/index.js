const express = require('express');

const router = express.Router();

const UpdateBankDetailsByIdController = require('@controllers/v1/BankDetails')

router.put('/updateBankDetails/:userId', async (req, res, next) => {
    try {
        const result = await UpdateBankDetailsByIdController.updateBankDetailsById(req, res, next);
    } catch (error) {
        console.error(error);
        next(error);
    }

});

module.exports = router;
