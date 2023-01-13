const studentsController = require("./Controllers/studentsController");

const path = require("path");
module.exports = (app) => {
    app.route("/").get(studentsController.getAllUsers);

    app.route("/adduser").post(studentsController.createUser);

    app.route("/deleteUser/:id").get(studentsController.deleteUser);
};