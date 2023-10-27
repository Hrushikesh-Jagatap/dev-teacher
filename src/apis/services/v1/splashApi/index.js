const TeacherData = require('@models/Teacher');
const AppVersion = require('@models/AppVersion');


const getSplashData = async (userId) => {
  try {
    const user = await TeacherData.findOne({ userId: userId }).lean(); 

    if (user === null) {
      return {
        status: 404,
        message: 'TEACHER_NOT_FOUND',
      };
    }


    // const appVersions = await AppVersion.findOne({});

    const response = {
      teachingDetails: user?.teachingDetails ?? {},
      personalDetails: user?.personalDetails ?? {},
      // bankDetails: user?.bankDetails ?? {},
      educationDetails: user?.educationDetails ?? {},
      // appVersions: appVersions ?? {},
      req_status:user?.req_status??{},
    };

    return response;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to get teachers');
  }
}

module.exports = {
  getSplashData
};

