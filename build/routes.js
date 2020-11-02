"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express = __importStar(require("express"));
const example_controller_1 = require("./controllers/example.controller");
const body_parser_1 = __importDefault(require("body-parser"));
const inversify_1 = require("inversify");
let Router = class Router {
    constructor(exampleController) {
        this.appInstance = express.application;
        this.exampleController = exampleController;
    }
    init(app) {
        this.appInstance = app.getAppInstance();
        this.initializeMiddlewares();
        this.intializeRoutes();
    }
    initializeMiddlewares() {
        this.appInstance.use(body_parser_1.default.urlencoded({ extended: true }));
        this.appInstance.use(body_parser_1.default.json());
    }
    intializeRoutes() {
        this.appInstance.route('/')
            .get((request, response) => {
            response.send('Welcome to the node + typescript example');
        });
        this.appInstance.route('/examples')
            .get(this.exampleController.getAll.bind(this.exampleController))
            .post(this.exampleController.create.bind(this.exampleController));
    }
};
Router = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(example_controller_1.ExampleController)),
    __metadata("design:paramtypes", [example_controller_1.ExampleController])
], Router);
exports.Router = Router;
