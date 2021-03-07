"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var SendMailController_1 = require("./controllers/SendMailController");
var SurveyController_1 = require("./controllers/SurveyController");
var UserController_1 = __importDefault(require("./controllers/UserController"));
// import { UserController } from './controllers/UserController';
var router = express_1.Router();
exports.router = router;
var userController = new UserController_1.default();
router.post("/users", userController.create);
var surveyController = new SurveyController_1.SurveyController();
router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.show);
var sendMailController = new SendMailController_1.SendMailController();
router.post("/sendMail", sendMailController.execute);