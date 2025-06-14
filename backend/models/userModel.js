import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  dob: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"],
  },

  address: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAWgBaAMBIgACEQEDEQH/xAAyAAEAAgIDAQEAAAAAAAAAAAAAAQUICQIGBwQDAQEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAADLAEXlHeAFHMSReUd4AUcxJF5R3g..."
  }
});

const User = mongoose.model("User", userSchema);
export default User;
