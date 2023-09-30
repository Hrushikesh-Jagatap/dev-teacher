const TeacherService = require('@services//v1/serachbystatus');

// Controller function to get a single teacher by userID
const getBystatus = async (req, res) => {
    try {
        const teacher = await TeacherService.getUserById(req.params.id);
        const result = {
            data: null,
            success: false,
            error: 'Error in Finding By UserId',
        }
        if (!teacher) {
            return result;
        }
        result.data = teacher;
        result.success = true;
        return result;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getBystatus
}  