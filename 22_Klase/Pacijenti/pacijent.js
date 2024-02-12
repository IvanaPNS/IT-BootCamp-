class Pacijent {
  constructor(i, v, t) {
    this.ime = i;
    this.visina = v;
    this.tezina = t;
  }
  set ime(i) {
    this._ime = i;
  }
  get ime() {
    return this._ime;
  }
  set visina(v) {
    if (v > 0 && v < 255) {
      this._visina = v;
    } else {
      this._visina = 180;
    }
  }
  get visina() {
    return this._visina;
  }

  set tezina(t) {
    if (t > 0 && t < 550) {
      this._tezina = t;
    } else {
      this._tezina = 100;
    }
  }
  get tezina() {
    return this._tezina;
  }
  stampaj() {
    console.log(`Pacijent je: ${this.ime}-${this.visina}-${this.tezina}`);
  }
  bmi() {
    let vrednost = this.tezina / (this.visina / 100) ** 2;
    // console.log(`BMI vrednost je: ${vrednost}`);
    return vrednost;
  }
  kritican() {
    if (this.bmi() < 15 || this.bmi() > 40) {
      return true;
    }
    return false;
  }
}

export default Pacijent;
