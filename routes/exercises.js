//import router using ES6
import { Router } from 'express';
const router = Router();

//models

import Exercise from '../models/exercise.model.js'

// find or get all data

router.get('/', (req, res) => {
     Exercise.find().then(exercises => res.json(exercises))
          .catch(err => res.status(400).json('Error:' + err))
})

// create or save

router.post('/add', (req, res) => {

     // old way 

     // const username = req.body.username;
     // const description = req.body.description;
     // const duration = Number(req.body.duration);
     // const date = Date.parse(req.body.date);

     //      const newExercise = new Exercise({
     //           username,
     //           description,
     //           duration,
     //           date,
     //      })
     //      newExercise.save().then(() => res.json('Exercise Added'))
     //           .catch((err) => res.status(400).json('Error:' + err))
     // 

     //new way 
     const dbData = {
          username: req.body.username,
          description: req.body.description,
          duration: Number(req.body.duration),
          date: Date.parse(req.body.date)
     }
     // Exercise.create(dbData, (err, data) => {
     //      if (err) {
     //           res.status(500).json({ Error: err });
     //      } else {
     //           res.status(201).json({ data: data });
     //      }
     // })

     // extra new 

     Exercise.create(dbData).then((res.status(201).json('Exercise Added')))
          .catch((err) => res.status(400).json('Error:' + err))

})

// find or get by id

router.get('/:id', (req, res) => {
     Exercise.findById(req.params.id)
          .then(exercise => res.status(200).json(exercise)).
          catch(err => res.status(400).json('Error:' + err));
})

//delete

router.delete('/:id', (req, res) => {
     Exercise.findByIdAndDelete(req.params.id)
          .then(() => res.status(200).json({ data: 'Exercise Deleted.' }))
          .catch(err => res.status(400).json({ Error: err }));
})

//update
router.post('/update/:id', (req, res) => {
     Exercise.findById(req.params.id)
          .then((exercise) => {
               exercise.username = req.body.username;
               exercise.description = req.body.description;
               exercise.duration = Number(req.body.duration);
               exercise.date = Date.parse(req.body.date);

               exercise.save().then(() => res.status(201).json({ data: 'Exercise updated' }))
                    .catch((err) => res.status(400).json({ Error: err }))
          })

          .catch((err) => res.status(400).json('Error:' + err))
})

export default router;