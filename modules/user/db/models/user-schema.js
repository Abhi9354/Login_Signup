import mongoose from "../../../../shared/sharedDB/connection.js";

import { Schema } from "mongoose";
import { AppConstants } from "../../../../shared/utils/constants/config.js";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true

    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 100,
    },
});
export const userModel=mongoose.model(AppConstants.SCHEMA.USERS_SCHEMA, userSchema)