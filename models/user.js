const { Schema, model } = require("mongoose");
const { createHash, randomBytes } = require("crypto");
const { createToken } = require("../services/authentication");

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },

        salt: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["USER", "ORGANIZER"],
            default: "USER",
        },
    },
    { timestamps: true }
);

userSchema.pre("save", function (next) {
    const user = this;

    if (!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    const hashedPassword = createHash("sha256", salt).update(user.password).digest("hex");

    this.salt = salt;
    this.password = hashedPassword;

    next();
});

userSchema.static("matchPasswordAndGenerateToken", async function (email, password) {
    const user = await this.findOne({ email });

    if (!user) throw new Error("User Not Found!");

    const salt = user.salt;
    const hashedPassword = createHash("sha256", salt).update(password).digest("hex");

    if (hashedPassword !== user.password) throw new Error("Password Incorrect!!");

    const token = createToken(user);
    return token;
});

const User = model("user", userSchema);
module.exports = User;
