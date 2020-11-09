import {Container} from "inversify";
import {Router} from "./routes";
import {App} from "./app";
import {ExampleController} from "./controllers/example.controller";
import {ExampleRepository} from "./domain/Repositories/ExampleRepository";
import TYPES from "./types";
import {TypeORMExampleRepository} from "./infrastructure/Persistence/TypeORMExampleRepository";

const DIContainer = new Container();

// Services
DIContainer.bind<App>(App).toSelf();
DIContainer.bind<ExampleController>(ExampleController).toSelf();
DIContainer.bind<Router>(Router).toSelf();

// Repositories
DIContainer.bind<ExampleRepository>(TYPES.ExampleRepository).to(TypeORMExampleRepository);

export default DIContainer;
