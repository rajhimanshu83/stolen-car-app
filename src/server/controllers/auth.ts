import { Request, Response } from 'express';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/Police');
const keys = require('../config/keys');

// User Register
export const handleRegister = (req: Request, res: Response) => {
	const { email, name, password } = req.body;
    console.log( email, name, password);
	User.findOne({ email: req.body.email }).then((user:any) => {
		if (user) {
		//   errors.email = 'Email already exists';
		  return res.status(400).json('Email already exists');
		} else {

		  const newUser = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		  });
	
		  bcrypt.genSalt(10, (err:any, salt:any) => {
			bcrypt.hash(newUser.password, salt, (err:any, hash:any) => {
			  if (err) throw err;
			  newUser.password = hash;
			  newUser
				.save()
				.then((user:any) => res.json(user))
				.catch((err:any) => console.log(err));
			});
		  });
		}
	  });
	// if ( !email || !name || !password ) {
	// 	return res.status(400).json('incorrect form submission');
	// }
	// // encrypt password
	// const hash = bcrypt.hashSync(password, 10 , (err: any, hash: any) => { return hash });
	// // Transactions allow correct recovery from failures
	// db.transaction((trx: any) => {
	// 	trx.insert({
	// 		hash: hash,
	// 		email: email,
	// 		name: name
	// 	})
	// 	 .into('users')
	// 	 .returning('*')
	// 	 .then((result: any) => {
	// 		return res.status(200).json(result);
	// 	 })
	// 	 // commit incase of success
	// 	 .then(trx.commit)
	// 	 // rollback incase of failure
	// 	 .catch((err: any) => {
	// 		// console.log("err", err);
	// 		trx.rollback;
	// 		res.status(400).json('email already exists')
	// 	 })
	// })
	// .catch((err: any) => res.status(400).json('unable to register'))
	
}

// User Signin
export const handleSignin = async (req: Request, res: Response, bcrypt: any) => {
	const { email, password } = req.body;

	if ( !email || !password ) {
		return res.status(400).json('incorrect form submission');
	}
  // Find user by email
  User.findOne({ email }).then((user:any) => {
    // Check for user
    if (!user) {
    //   errors.email = 'User not found';
      return res.status(404).json('User not found');
    }

    // Check Password
    bcrypt.compare(password, user.password).then((isMatch:Boolean) => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err:any, token:any) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        // errors.password = 'Password incorrect';
        return res.status(400).json('Password incorrect');
      }
    });
  });
	
	// // select * from complains where id not in ( select fk_complains_id from users where fk_complains_id is not null );
	// const subquery = db.select('fk_complains_id').from('users').whereNotNull('fk_complains_id');
	// const getUnAssignedComplains = await db('complains').whereNotIn('id', subquery);
	// // console.log("getUnAssignedComplains", getUnAssignedComplains);

	// db.select('email', 'hash').from('users')
	// .where('email', '=', email)
	//  .then((data: any) => {
	// 	// compare password hash
	//  	const isValid = bcrypt.compareSync(password, data[0].hash);
	//  	if (isValid) {
	//  		return db.select('id', 'email', 'name', 'created_at', 'status', 'fk_complains_id').from('users')
	//  		.where('email', '=', email)
	//  		.then((user: any) => {
	// 			 	let model: any = { status: 'online' };
	// 			 	if (user[0].fk_complains_id === null && getUnAssignedComplains.length) {
	// 					model = {
	// 						status: 'online',
	// 						fk_complains_id: getUnAssignedComplains[0].id,
	// 					}
	// 				}

	// 				db.transaction((trx: any) => {
	// 					trx('users').where({ id: user[0].id })
	// 					.update(model)
	// 					.returning('*')
	// 					.then((result: any) => {
	// 						return res.status(200).json(result[0]);
	// 					})
	// 					.then(trx.commit)
	// 					.catch((error: any) => res.status(200).json(user[0]))
	// 				})
	// 				.catch((err: any) => res.status(200).json(user[0]))
	//  		})
	//  		.catch((err: any) => res.status(400).json('unable to get user'))
	//  	} else {
	//  		res.status(400).json('wrong credentials');
	//  	}
	 	
	//  })
	//  .catch((err: any) => res.status(400).json('wrong email id'))
}

// User Logout
export const handleLogout = (req: Request, res: Response, db: any, bcrypt: any) => {
	const { id } = req.params;
	if ( !id ) {
		return res.status(400).json('incorrect form submission');
	}

	db('users').where({ id })
	.update({
		status: 'offline',
	})
	.returning('*')
	.then((result: any) => {
		return res.status(200).json(result);
	})
	.catch((err: any) => res.status(400).json('Unable to log out'))
	
}
