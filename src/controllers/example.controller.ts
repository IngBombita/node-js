import {Request, Response} from 'express';
import {IExample} from "../interfaces/example.interface";
import {injectable} from "inversify";
const {TwingEnvironment, TwingLoaderFilesystem} = require('twing');
let loader = new TwingLoaderFilesystem('src/views');
let twing = new TwingEnvironment(loader);

@injectable()
export class ExampleController {

    private examples: IExample[] = [
        {name: 'This is one example.'},
        {name: 'This is another one.'},
        {name: 'And one more example.'}
    ];

    public getAll(request: Request, response: Response) {
        twing.render('examples.twing.html', {examples: this.examples}).then((output: any) => {
            response.end(output);
        });
    };

    public showExampleForm(req: Request, res: Response) {
        twing.render('exampleForm.twing.html').then((output: any) => {
            res.end(output);
        });
    }

    public create(request: Request, response: Response) {
        const example: IExample = request.body;

        this.examples.push(example);

        response.redirect('/examples');
    };
}