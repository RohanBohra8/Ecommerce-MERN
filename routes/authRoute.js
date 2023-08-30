import  express  from "express";
import {registerController, loginController, testController, forgotPasswordController, updateProfileController} from '../controllers/authController.js';
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router()

//routing

//REGISTER || POST
router.post('/register', registerController)

//LOGIN || POST
router.post('/login', loginController);

//FORGOT PASSWORD || POST
router.post('/forgot-password', forgotPasswordController);


//TEST
router.get('/test', requiredSignIn, isAdmin, testController);

//PROTECTED ROUTE FOR USER AUTH
router.get('/user-auth', requiredSignIn , (req,res) => {
    res.status(200).send({ ok:true });
})

//PROTECTED ROUTE FOR ADMIN AUTH
router.get('/admin-auth', requiredSignIn, isAdmin, (req,res) => {
    res.status(200).send({ ok:true });
})

//UPDATE PROFILE || PUT
router.put("/profile", requiredSignIn, updateProfileController);

export default router;