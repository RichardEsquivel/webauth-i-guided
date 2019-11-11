const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);
const bcrypt = require('bcryptjs');


router.get('/', (req, res) => {
	res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
	const pw = req.body.password;

	const hash = bcrypt.hashSync(pw, 14)

	res.status(200).json({ message: pw, hash: hash });

});
module.exports = router;
