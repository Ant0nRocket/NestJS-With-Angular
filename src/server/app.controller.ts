import  { Controller, Get } from '@nestjs/common';
import { TestModel } from '../shared/test.model';

@Controller()
export class AppController {

    @Get()
    getDefalt(): string {
        return new TestModel().testField;
    }
}