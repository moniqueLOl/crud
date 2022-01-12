import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation } from "@nestjs/swagger";
import { CreateSalaoDto } from '../dto/create-salao.dto';
import { UpdateSalaoDto } from '../dto/update-salao.dto';
import { SalaoService } from '../service/salao.service';


@Controller('salao')
export class SalaoController {
  constructor(private readonly _salaoService: SalaoService) { }

  @Get('index')
  index(data) {
    return this._salaoService.index(data);
  }

  @Post('store')
  @ApiOperation({ description: 'store the information at a client in the database' })
  store(@Body() body: CreateSalaoDto) {
    return this._salaoService.store(body);
  }

  @Get('show/:id')
  @ApiOperation({ description: 'show the information of a specific client' })
  findId(@Param('id') id) {
    return this._salaoService.findId(id);
  }

  @Put('update/:id')
  @ApiOperation({ description: 'update the information of a client in the database' })
  update(@Param('id') id, @Body() body: UpdateSalaoDto) {
    return this._salaoService.update(id, body);
  }

  @Post('active/:id')
  @ApiOperation({ description: 'activate a client by id' })
  active(@Param('id') id) {
    return this._salaoService.active(id)
  }

  @Post('inactive/:id')
  @ApiOperation({ description: 'inactivate a client by id' })
  inactive(@Param('id') id) {
    return this._salaoService.inactive(id)
  }

  @Delete('delete/:id')
  delete(@Param('id') id) {
    return this._salaoService.delete(id);
  }
}
