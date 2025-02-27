import { Schema, model, models } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: "string", required: true },
    email: { type: "string", required: true },
    number: { type: "string", required: true },
    company: { type: "string", required: true },
    message: { type: "string", required: true },
  },
  {
    timestamps: true,
  }
);

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;