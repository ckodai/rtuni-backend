import { Controller, Get, HttpStatus, Res, Post, Req, Put, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { Response, Request } from 'express';
import { diskStorage } from 'multer';
import { FileInterceptor,  } from '@nestjs/platform-express';
import { imageFileFilter, editFileName } from '../utils/file-upload.utils';

import { Lugar } from 'src/entities/lugar.entity';
import { Ubicacion } from 'src/entities/ubicacion.entity';
import { UbicacionService } from 'src/services/ubicacion.service';
import { LugarService } from '../services/lugar.service';


@Controller('api/lugar')
export class LugarController {
    constructor(
        private lugarService: LugarService,
        private ubicacionService: UbicacionService
    ) { }

    @Get()
    async getAll(@Req() req: Request, @Res() res: Response) {
        const lugares = await this.lugarService.findAll();

        return res.status(HttpStatus.OK).json(lugares);
    }

    @Post('postLugar')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './files',
            filename: editFileName
        }),
        fileFilter: imageFileFilter
    }))
    async postLugar(@UploadedFile() file: any, @Req() req: Request, @Res() res: Response, @Body() formData: any) {
        console.log(formData);
        
        const lugar = new Lugar();
        lugar.Observacion = formData.observacion;
        lugar.Nombre = formData.nombre;
        lugar.Estado = (formData.habilitado === 'true') ? 1 : 0;
        lugar.Imagen = file.originalname;
        await this.lugarService.save(lugar);

        const ubicacion = new Ubicacion();
        ubicacion.Datetime = new Date();
        ubicacion.Location = formData.location;
        await this.ubicacionService.save(ubicacion);

        lugar.Ubicacion = ubicacion;

        await this.lugarService.save(lugar);

        return res.status(HttpStatus.CREATED).json(lugar);
    }
}