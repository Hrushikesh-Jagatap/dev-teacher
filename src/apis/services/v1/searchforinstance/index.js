// const TeacherData = require('@models/Teacher');

// const searchTeacher = async (query) => {
//   try {
//     const {  subject, className, lang } = query;
// const instance_status1 ="Active"
//     const filter = {};

// //   if (mode && Array.isArray(mode) && mode.length > 0) {
// //   filter["teachingDetails.teaching_mode"] = mode;
// // }

//     if (subject) {
//       filter["teachingDetails.subjects_taught.subject"] = new RegExp(subject, 'i');
//     }

//     if (className) {
//       filter["teachingDetails.subjects_taught.class"] = new RegExp(className, 'i');
//     }

//     if (lang) {
//       filter["educationDetails.teaching_languages"] = new RegExp(lang, 'i');
//     }

//     if(instance_status1){
//             filter["instance_status"] = new RegExp(instance_status1);
//     }
// console.log(filter);
//     const results = await TeacherData.find(filter)
//       .select("userId  personalDetails teachingDetails educationDetails OnlieTeachingDeatis OfflineTeachingDeatis instance_status")
//       .lean().exec();

//       if (results === null) {
//         return {
//           status: 404,
//           message: 'NO_TEACHER_FOUND',
//         };
//       }
  
//     return results;
//   } catch (error) {
//     throw new Error('Failed to find teachers');
//   }
// };

// module.exports = {
//   searchTeacher,
// };
const Teacher = require('@models/Teacher');

const searchTeacher = async (query) => {
  try {
    const { subject, className, lang,studentid} = query;
    let status=true;
    // const filter = {'student_userId.student_userId': studentid,'student_userId.subject':subject,'student_userId.class':className,};
const filter={};
    if (subject) {
      filter["OnlieTeachingDeatis.subjects_taught.subject"] = new RegExp(subject, 'i');
    }
    //  if (subject) {
    //   filter["teachingDetails.subjects_taught.subject"] = new RegExp(subject, 'i');
    // }

 if (status) {
      filter["instance_status.status"] =status
    }



    if (className) {
      filter["OnlieTeachingDeatis.subjects_taught.class"] = new RegExp(className, 'i');
    }

    if (lang) {
      filter["OnlieTeachingDeatis.teaching_languages"] = new RegExp(lang, 'i');
    }

     

   
    console.log(filter);

    const results = await Teacher.find(filter)
     // .select("userId personalDetails teachingDetails educationDetails OnlineTeachingDetails OfflineTeachingDetails instance_status")
      .select("userId") 
     .lean()
      .exec();

    if (results.length === 0) {
      return {
        status: 404,
        message: 'NO_TEACHER_FOUND',
      };
    }

    return results;
  } catch (error) {
    throw new Error('Failed to find teachers');
  }
};

module.exports = {
  searchTeacher,
};
