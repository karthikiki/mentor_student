const mongo = require("mongoose");

const studentSchema = mongo.Schema({
  name: {
    type: String,
    required: [true, "plese enter the name"],
  },
  email: {
    type: String,
    required: [true, "plese enter the email name"],
  },
  phone_no: {
    type: String,
    required: [true, "plese enter the phone_no name"],
  },
  course: {
    type: String,
    required: [true, "plese enter the course name"],
  },
  mentor: {
    type: mongo.Schema.Types.ObjectId,
    ref: "Mentor",
    default: null,
  },
});

const Student = mongo.model("Student", studentSchema);

module.exports = Student;