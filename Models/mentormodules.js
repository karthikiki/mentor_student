const mongo = require("mongoose");

const mentorSchema = mongo.Schema({
  name: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
  },
  phone_no: {
    type: String,
    required: [true],
  },
  course: {
    type: String,
    required: [true, "please enter course"],
  },
});

const Mentor = mongo.model("Mentor", mentorSchema);

module.exports = Mentor;