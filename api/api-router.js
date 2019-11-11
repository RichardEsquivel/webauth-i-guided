const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
	res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
	const credentials = req.body;

	const hash = bcrypt.hashSync(credentials.password, 14)
		.then(hashed => {
			credentials.password = hash
			// check that passwords match
			if (hash) {
				res.status(200).json({ password: credentials, hash: hash });
			} else {

				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch(error => {
			res.status(500).json(error);
		});
});
module.exports = router;
