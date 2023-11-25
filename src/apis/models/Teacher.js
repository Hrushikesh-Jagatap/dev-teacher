const { boolean } = require('joi');
const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({

  userId: {
    type: String
  },

  // teacher_id: {
  //   type: String,
  //   unique: true
  // },

  personalDetails: { // personal Details ->

    first_name: {
      type: String,
      default: null
    },

    last_name: {
      type: String,
      default: null
    },

    fathersName: {
      type: String,
      default: null
    },

    dob: {
      type: String,
      default: null
    },

    gender: {
      type: String,
      default: null
    },

    email: {
      type: String,
      default: null
    },

    phone_number: {
      type: String,
      default: null
    },

    profileImage: {
      type: String,
      default: null
    },

    aboutUs: {
      type: String,
      default: null
    },

    secondaryMobileNumber: {
      type: String,
      default: null
    },

    address: {
      street: {
        type: String,
        default: null
      },
      city: {
        type: String,
        default: null
      },
      state: {
        type: String,
        default: null
      },
      postal_code: {
        type: String,
        default: null
      },
      country: {
        type: String,
        default: null
      },
      location: {
        longitude: String,
        latitude: String,
      },
    },
  },

  isProfileCompleted: {
    type: Boolean,
    default: false,
  },

  teachingDetails: { // Teaching Details

    teaching_mode:
    [{
      type: String,
      default: null,
    }],

    subjects_taught: [{
      subject: String,
      class: String,
      target_exam: [String],
    }],

    batch_taught: [
      {
        batch_id: {
          type: String,
          default: null
        },
        batch_name: {
          type: String,
          default: null
        },
        batch_class: {
          type: String,
          default: null
        }
      },
    ],

    qualifications: [
      {
        degree: String,
        institution: String,
        year: String,
      },
    ],

    experience: [
      {
        school_name: String,
        position: String,
        start_date: String,
        end_date: String,
      },
    ],

  },


  OnlieTeachingDeatis:{
  
    availability:String,
   perhourcharge:String,
    teaching_languages: [String],
    teaching_mode:
    {
      type: String,
      default: "Online",
    },
    subjects_taught: [{
      subject: String,
      class: String,
      target_exam: [String],
    }],

    batch_taught: [
      {
        batch_id: {
          type: String,
          default: null
        },
        batch_name: {
          type: String,
          default: null
        },
        batch_class: {
          type: String,
          default: null
        }
      },
    ],

    qualifications: [
      {
        degree: String,
        institution: String,
        year: String,
      },
    ],

    experience: [
      {
        school_name: String,
        position: String,
        start_date: String,
        end_date: String,
      },
    ],
   
  },
  
  
  
  
  
  OfflineTeachingDeatis:{
     teaching_mode:
    {
      type: String,
      default: "Offline",
    },
     teaching_languages: [String],
    availability:String,
   priceperdistancekm:String,
   pincode:[String],
   subjects_taught: [{
      subject: String,
      class: String,
      target_exam: [String],
    }],

    batch_taught: [
      {
        batch_id: {
          type: String,
          default: null
        },
        batch_name: {
          type: String,
          default: null
        },
        batch_class: {
          type: String,
          default: null
        }
      },
    ],

    qualifications: [
      {
        degree: String,
        institution: String,
        year: String,
      },
    ],

    experience: [
      {
        school_name: String,
        position: String,
        start_date: String,
        end_date: String,
      },
    ],
   
  },
  student_userId: [{
    student_userId: String,
    subject: String,
    classes: String,
    name:String,
    profileimage:String,
  }],

  req_status: [
    {
      // sid: String,
      sid_userId: String,
       name:String,
        profileimage:String,
      status: String,
      about: String,
      subject: String,
      classes: String,
      flag: Boolean,
    },
  ],

  educationDetails: {  //Educational Details

    certifications: [String],

    teaching_languages: [String],

    additional_info: String,

    demo_video: String,
  },

  isDeleted: {
    type: Boolean,
    default: false,
  },

  createdBy: {
    type: String,
    default: null,
  },

  updatedBy: {
    type: String,
    default: null,
  },

  bankDetails: { // Bank Details

    payment: {
      type: Object,
      upiInfo: {
        type: Array,
        name: String,
        mobile: String,
        app: String,
        upi: String,
        qrImage: String,
        active: Boolean,
      },
      default: { "upiInfo": [] }
    },
  },


  ApplicationStatus: {
    isPersonalDetailsCompleted: {
      type: Boolean,
      default: false
    },
    isEducationalDetailCompleted: {
      type: Boolean,
      default: false
    },
    isbankDetailsCompleted: {
      type: Boolean,
      default: false,
    },
    isTeachingDetailsCompleted: {
      type: Boolean,
      default: false
    }
  },
  Admin_Review:{
    communication:String,
    admin_userid:String,
    rating:String,
    comment:String,
    Teaching_skill:String,
    flag:Boolean,

    // abc:String,
    // xyz:String,
  },
  instance_status:{
  status:Boolean,
 default:false,
  
 
  },
  isadmin:{
    type:Boolean,
    default:false,
  },

}, { timestamps: { createdAt: true, updatedAt: true }, versionKey: false });

const TeacherData = mongoose.model('TeacherData', teacherSchema);

module.exports = TeacherData;
