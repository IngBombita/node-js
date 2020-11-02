"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = require("./app");
const routes_1 = require("./routes");
const di_container_1 = __importDefault(require("./di-container"));
const app = di_container_1.default.resolve(app_1.App);
const router = di_container_1.default.resolve(routes_1.Router);
app.setPort(3000);
app.listen();
router.init(app);
