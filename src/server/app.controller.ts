import  { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

    @Get()
    getDefalt(): string {
        return "";
    }
}