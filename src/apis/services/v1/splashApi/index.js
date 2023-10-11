const TeacherData = require('@models/Teacher');
const AppVersion = require('@models/AppVersion');


const getSplashData = async (userId) => {
  try {
    const user = await TeacherData.findOne({ userId: userId }).lean(); 

    if (!user) {
      throw new Error('User not found');
    }

    const appVersions = await AppVersion.findOne({});

    const response = {
      teachingDetails: user?.teachingDetails ?? {},
      personalDetails: user?.personalDetails ?? {},
      bankDetails: user?.bankDetails ?? {},
      educationDetails: user?.educationDetails ?? {},
      appVersions: appVersions ?? {},
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
