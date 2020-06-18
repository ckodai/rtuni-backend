import { Controller, Get, HttpStatus, Res, Post, Req, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Response, Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

import { LugarService } from '../services/lugar.service';

@Controller('api/lugar')
export class LugarController {
    constructor(
        private lugarService: LugarService
    ) { }

    @Get()
    async getAll(@Req() req: Request, @Res() res: Response) {
        const lugares = await this.lugarService.findAll();

        return res.status(HttpStatus.OK).json(lugares);
    }

    @Post('uploadImgLugar')
    @UseInterceptors(FileInterceptor('image'))
    async postImgLugar(@UploadedFile() file: any, @Req() req: Request, @Res() res: Response) {
        console.log(req);
    }
}