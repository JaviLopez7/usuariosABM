export class Usuario {
    
    public _id !: number;
    public get id(): number {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }

    public _nombre !: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(v: string) {
        this._nombre = v;
    }

    
    public _apellido !: string;
    public get apellido() : string {
        return this._apellido;
    }
    public set apellido(v : string) {
        this._apellido = v;
    }
    
    
    public _correoElectronico !: string;
    public get correoElectronico() : string {
        return this._correoElectronico;
    }
    public set correoElectronico(v : string) {
        this._correoElectronico = v;
    }

    
    public _contrasenia !: string;
    public get contrasenia() : string {
        return this._contrasenia;
    }
    public set contrasenia(v : string) {
        this._contrasenia = v;
    }
}
