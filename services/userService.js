const user = require('../models/userModel');

exports.createUser = async (options) => {
    const operation = "Create User";

    try{
        const newUser = await user.create(options);

        const result = {
            operation: operation,
            result: "success",
            message: "User created successfully",
            data: newUser
        }

        return result;
    }catch (error) {
        const result = {
            operation: operation,
            result: "failed",
            message: error,
            data: ""
        }

        return result;
    }
}