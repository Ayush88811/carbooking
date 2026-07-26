import mogoose from "mongoose";

const userSchema = new mogoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["owner", "user"],
        default: "user"
    },
    image: {
        type: String,
        default: ''
    }
},{
    timestamps: true
});

const User = mogoose.model("User", userSchema);

export default User;