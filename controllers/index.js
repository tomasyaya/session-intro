function getHome(req, res) {
  res.render("index");
}

function getPrivate(req, res) {
  console.log("session", req.session);
  res.render("private");
}

module.exports = { getHome, getPrivate };
