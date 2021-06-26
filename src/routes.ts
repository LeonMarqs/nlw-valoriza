import { Router } from 'express';

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ListReceivedComplimentsController } from './controllers/ListReceivedComplimentsController';
import { ListSentComplimentsController } from './controllers/ListSentComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listReceivedComplimentsController = new ListReceivedComplimentsController();
const listSentComplimentsController = new ListSentComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/login", authenticateUserController.handle);
router.post("/users", createUserController.handle);
router.get(
  "/users", 
  ensureAuthenticated, 
  listUsersController.handle
);
router.get(
  "/tags", 
  ensureAuthenticated, 
  listTagsController.handle
);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);
router.get(
  "/users/compliments/sent",
  ensureAuthenticated, 
  listSentComplimentsController.handle
);
router.get(
  "/users/compliments/received", 
  ensureAuthenticated, 
  listReceivedComplimentsController.handle
);


export { router };