import express from 'express';
import blogControllers from '../controllers/blogControllers.js';

const router = express.Router();


router.get('/', blogControllers.blog_index);

router.get('/create' , blogControllers.blog_create_get);

router.get('/:id', blogControllers.blog_details);

router.post('/', blogControllers.blog_create_post);

router.delete('/:id', blogControllers.blog_delete);


export default router;