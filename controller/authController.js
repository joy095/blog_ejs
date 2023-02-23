class authController {
  registerPage = (req, res) => {
    return res.render("dashboard/register");
  };
}
module.exports = new authController();
