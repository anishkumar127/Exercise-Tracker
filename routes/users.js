import { Router } from 'express'
const router = Router()
import User from '../models/user.model.js'


// router.route('/').get((req, res) => {
//      User.find().then(users => res.json(users))
//           .catch(err => res.status(400).json('Error:' + err));
// })


router.get('/', (req, res) => {
     User.find().then(users => res.json(users))
          .catch(err => res.status(400).json('Error:' + err));
})



// router.route('/add',).post((req, res) => {
//      const username = req.body.username;
//      const newUser = new User({ username });

//      newUser.save().then(() => res.json('User added'))
//           .catch(err => res.status(400).json('Error:' + err));
// })


router.route('/add',).post((req, res) => {
     const username = req.body.username;
     const newUser = new User({ username });

     newUser.save().then(() => res.json('User added'))
          .catch(err => res.status(400).json('Error:' + err));
})

export default router;