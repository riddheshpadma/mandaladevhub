import { Schema, model, models } from "mongoose";

const GetStartedSchema = new Schema(
  {
    name: { type: "string", required: true },
    email: { type: "string", required: true },
    number: { type: "string", required: true },
    company: { type: "string", required: true },
    businessType: { type: "string", required: true },
    website: { type: "string", required: true },
    project: { type: "string", required: true },
    budget: { type: "string", required: true },
  },
  {
    timestamps: true,
  }
);

const GetStarted = models.GetStarted || model("GetStarted", GetStartedSchema);

export default GetStarted;