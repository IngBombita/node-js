import {Request, Response} from 'express';
import {inject, injectable} from "inversify";
import TYPES from "../../types";
import {ExampleRepository} from "../../domain/Repositories/ExampleRepository";
import {Category} from "../../domain/Entities/Category";
import axios from "axios";
import {ExampleService} from "../../application/Services/ExampleService";
import {IMailer} from "../Services/IMailer";
import {NewExampleMail} from "../Services/NewExampleMail";

const {TwingEnvironment, TwingLoaderFilesystem} = require('twing');
let loader = new TwingLoaderFilesystem('src/infrastructure/views');
let twing = new TwingEnvironment(loader);

@injectable()
export class ExampleController {
    private exampleRepository: ExampleRepository;
    @inject(TYPES.IMailer) private mailer: IMailer;
    @inject(ExampleService) private exampleService: ExampleService;

    constructor(
        @inject(TYPES.ExampleRepository) exampleRepository: ExampleRepository,
        @inject(ExampleService) exampleService: ExampleService,
        @inject(TYPES.IMailer) mailer: IMailer
    ) {
        this.mailer = mailer;
        this.exampleService = exampleService;
        this.exampleRepository = exampleRepository;
    }

    public async getAll(request: Request, response: Response) {
        let examples = await this.exampleRepository.findAll();

        twing.render('examples.twing.html', {examples}).then((output: any) => {
            response.end(output);
        });
    };

    public async showExampleForm(req: Request, res: Response) {
        let categories = await Category.find();

        twing.render('exampleForm.twing.html', {categories}).then((output: any) => {
            res.end(output);
        });
    }

    public async create(request: Request, response: Response) {
        let example = await this.exampleService.create(request.body.name);
        await this.mailer.send('eduardojulioculasso@gmail.com', 'Edu', 'Se ha creado algo', NewExampleMail.getBody(example.name));

        response.redirect('/examples');
    };
}