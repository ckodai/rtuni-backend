import { Controller, Get, HttpStatus, Res, Post, Req, Put, Body } from '@nestjs/common';
import { Response, Request } from 'express';
import { VisitaService } from 'src/services/visita.service';
import { Visita } from 'src/entities/visita.entity';
import { UsuarioService } from 'src/services/usuario.service';
import { Usuario } from 'src/entities/usuario.entity';

@Controller('api/visita')
export class VisitaController {
    constructor(
        private visitaService: VisitaService,
        private usuarioService: UsuarioService
    ) {}

    @Get()
    async getAll(@Req() req: Request, @Res() res: Response) {
        const visitas = await this.visitaService.findAll();

        return res.status(HttpStatus.OK).json(visitas);
    }

    @Post()
    async postVisita(@Req() req: Request, @Res() res: Response) {
        const user = new Usuario();
        user.Nombre = req.body["Nombre"];
        user.Edad = req.body["Edad"];
        user.Origen = req.body["Origen"];
        user.Clasificacion = req.body["Clasificacion"];

        await this.usuarioService.save(user);

        const visita = new Visita();
        visita.Datetime = new Date();
        visita.Observacion = req.body["Observacion"];
        visita.Usuario = user;

        await this.visitaService.save(visita);
        
        return res.status(HttpStatus.CREATED);
    }
}