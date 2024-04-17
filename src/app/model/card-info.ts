
export class CardInfo {

  constructor(nombre: string, numero: string, mes: string, año: string, cvc: string) {
  }

  public _nombre: string = "";
  public _numero: string = "";
  public _mes: string = "";
  public _año: string = "";
  public _cvc: string = "";


  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get numero(): string {
    return this._numero;
  }

  set numero(value: string) {
    this._numero = value;
  }

  get mes(): string {
    return this._mes;
  }

  set mes(value: string) {
    this._mes = value;
  }

  get año(): string {
    return this._año;
  }

  set año(value: string) {
    this._año = value;
  }

  get cvc(): string {
    return this._cvc;
  }

  set cvc(value: string) {
    this._cvc = value;
  }
}
