import { Controller, Get, HttpStatus, Res, Post, Req, Put } from '@nestjs/common';
import { Response, Request } from 'express';
import { UsuarioService } from 'src/services/usuario.service';

@Controller('api/usuarios')
export class UsuarioController {
    constructor(
        private usuarioSerive: UsuarioService
    ) { }

    @Get()
    async getAll(@Req() req: Request, @Res() res: Response) {
        const pedidos = await this.usuarioSerive.findAll();

        return res.status(HttpStatus.OK).json(pedidos);
    }
}