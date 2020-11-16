import {Container} from "inversify";
import {Router} from "./routes";
import {App} from "./app";
import {ExampleController} from "./infrastructure/controllers/ExampleController";
import {ExampleRepository} from "./domain/Repositories/ExampleRepository";
import TYPES from "./types";
import {TypeORMExampleRepository} from "./infrastructure/Persistence/TypeORMExampleRepository";
import {CategoryController} from "./infrastructure/controllers/CategoryController";
import {ExampleService} from "./application/Services/ExampleService";
import {IMailer} from "./infrastructure/Services/IMailer";
import {AxiosMailer} from "./infrastructure/Services/AxiosMailer";

const DIContainer = new Container();

// Services
DIContainer.bind<App>(App).toSelf();
DIContainer.bind<Router>(Router).toSelf();
DIContainer.bind<ExampleService>(ExampleService).toSelf();
DIContainer.bind<IMailer>(TYPES.IMailer).to(AxiosMailer);

// Repositories
DIContainer.bind<ExampleRepository>(TYPES.ExampleRepository).to(TypeORMExampleRepository);

// Controllers
DIContainer.bind<CategoryController>(CategoryController).toSelf();
DIContainer.bind<ExampleController>(ExampleController).toSelf();

export default DIContainer;
