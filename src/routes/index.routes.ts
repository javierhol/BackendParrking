import {Router} from 'express';

import {welcome} from '../controllers/index.controller';
import { getUsers ,createUser,getUser} from '../controllers/user.controller';
import {controllersAdmin } from "../controllers/ControllersAdmin"
const router:Router = Router();

router.route('/') 
  .get (welcome);
router.route('/users').get(getUsers);

//rutas Users
router.route("/createUser").post(createUser);
router.route("/:userId").get(getUser);

//rutas admin

router.post("/adminpost",controllersAdmin.Signup)
router.post( "/login", controllersAdmin.signup )
// Estacionamiento
router.get("/parkingLot")
router.post("/parkingLot")
router.delete("/parkingLot")
router.put("/parkingLot")
router.get("/parkingLot/:id")

export default router;
