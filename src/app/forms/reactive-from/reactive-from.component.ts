import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.scss'],
})
export class ReactiveFromComponent {
  form: FormGroup;
  public firstNameControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(70),
  ]);
  public lastNameControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(70),
  ]);
  public emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.maxLength(150),
  ]);
  public countryControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(70),
  ]);
  public cityControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(150),
  ]);
  public addressControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(150),
  ]);
  public phoneControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
  ]);

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      email: this.emailControl,
      country: this.countryControl,
      city: this.cityControl,
      address: this.addressControl,
      phone: this.phoneControl,
    });
  }

  public onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
    } else {
      alert(`
      Los datos ingresados no son validos.
      Intente nuevamente.`);
    }
  }
}
