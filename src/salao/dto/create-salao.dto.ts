export class CreateSalaoDto {
    name: string;
    cpf: string;
    email: string;
    telephone: number;
    pendency: boolean;
    appointment?: string;
    active: boolean;
}
