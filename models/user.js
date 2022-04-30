import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: false }, // required is false because we are using google auth
  googleId: { type: String, required: false },
  id: { type: String },
});


export default mongoose.model("user", userSchema);
