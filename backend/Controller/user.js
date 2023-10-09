const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email)

  try {
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};

module.exports = { login };
