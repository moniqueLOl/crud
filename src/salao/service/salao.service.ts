import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Salao, SalaoDocument } from '../entities/salao.entity';

@Injectable()
export class SalaoService {

  constructor(
    @InjectModel(Salao.name) private _salaoModel: Model<SalaoDocument>) { }

  index(params?) {
    return this._salaoModel.find()
  }

  async store(data) {
    const salao = new this._salaoModel(data)
    const existCpf = await this._salaoModel.findOne({ 'cpf': data.cpf })

    if (existCpf != null) {
      if (salao.cpf == existCpf.cpf) {
        return ('Este CPF já está cadastrado.')
      }
    }
    if (salao.pendency == true) {
      return ('Você possui pendencias no Salão da Marcia, favor acertar o mais rapido possivel para seguir com o cadastro e agendamento.')
    }
    else
      return salao.save();
  }

  findId(id) {
    return this._salaoModel.findById(id);
  }

  async update(id, data) {
    const salao = await this._salaoModel
      .findByIdAndUpdate(id, data, { new: true });

    return salao;

  }

  async active(id) {
    const salao = await this._salaoModel.findById({ _id: id });
    salao.active = true;

    const activesalao = (await this._salaoModel.findByIdAndUpdate(salao._id, salao, { new: true })).toObject();

    return activesalao;
  }

  async inactive(id) {
    const salao = await this._salaoModel.findById({ _id: id });
    salao.active = false;

    const inactivatesalao = (await this._salaoModel.findByIdAndUpdate(salao._id, salao, { new: true })).toObject()

    return inactivatesalao;
  }

  async delete(id: number) {
    const salao = (await this._salaoModel.findById(id)).toObject();
    if (salao.active === false) {
      const deleteSalao = await this._salaoModel.findByIdAndDelete(id)
      return deleteSalao
    } else {
      throw new Error('The client still is active true')

    }
  }
}
