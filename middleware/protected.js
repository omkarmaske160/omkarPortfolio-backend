const validator = require("validator");

exports.protected = async (req, res) => {
    try {
        const { password } = req.body;

        if (validator.isEmpty(password)) {
            return res.status(400).json({
                message: "all fields required"
            });
        }

        const defaultPassword = "8080";
        const result = defaultPassword === password;

        if (!result) {
            return res.status(200).json({
                message: "Password Incorrect"
            });
        }

        return res.status(200).json({
            message: "Password Correct"
        });

    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: error.message || "Something went wrong" });
    }
};
