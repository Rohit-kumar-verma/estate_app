import express from 'express'
import { getUsers, profilePosts, updateUser, deleteUser , savePosts, getNotificationNumber} from '../controllers/user.controller.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = express.Router()

router.get('/', getUsers)
// router.get('/:id', verifyToken, getUser)
router.put('/:id',verifyToken, updateUser)
router.delete('/:id', verifyToken, deleteUser)
router.post('/save', verifyToken, savePosts)
router.get('/profilePosts', verifyToken, profilePosts)
router.get('/notifications', verifyToken, getNotificationNumber)

export default router;