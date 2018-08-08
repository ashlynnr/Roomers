const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  _id: {
    type: String,
    ref: "users"
  },
  // handle: {
  //   type: String,
  //   required: true,
  //   max: 40
  // },
  name: {
    type: String
    // required: true
  },
  email: {
    type: String
    // required: true
  },
  phone: {
    type: String
    // required: true
  },
  birthday: {
    type: String
    // required: true
  },
  interestsDescription: String,
  profilePic: String,
  aboutMe: String,

  prefs: {
    smoke: {
      type: Boolean,
      default: false
    },

    clean: {
      type: Boolean,
      default: false
    },
    guests: {
      type: Boolean,
      default: false
    },

    pets: {
      type: Boolean,
      default: false
    }
  },
  title: String,
  companyName: String,

  traits: {
    clean: {
      type: Boolean,
      default: false
    },
    healthy: {
      type: Boolean,
      default: false
    },
    professional: {
      type: Boolean,
      default: false
    },
    student: {
      type: Boolean,
      default: false
    },
    earlyBird: {
      type: Boolean,
      default: false
    },
    nightOwl: {
      type: Boolean,
      default: false
    },
    fitnessEnthusiast: {
      type: Boolean,
      default: false
    },
    creative: {
      type: Boolean,
      default: false
    },
    bookworm: {
      type: Boolean,
      default: false
    },
    foodie: {
      type: Boolean,
      default: false
    },
    partyAnimal: {
      type: Boolean,
      default: false
    },
    vegan: {
      type: Boolean,
      default: false
    },
    introverted: {
      type: Boolean,
      default: false
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profiles", ProfileSchema);
