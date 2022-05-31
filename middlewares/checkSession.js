module.exports = function (req, res, next) {
  if (req.session.userId) {
    res.locals.user = {
      id: req.session.userId,
      name: req.session.userName,
      login: req.session.userEmail,
      isAdmin: req.session.isAdmin,
    };
    return next();
  } 
  next();
};
