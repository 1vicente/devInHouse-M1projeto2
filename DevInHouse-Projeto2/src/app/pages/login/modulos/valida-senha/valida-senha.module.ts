import { AbstractControl, FormGroup } from "@angular/forms";

export function ValidaSenhaModule(senha: string, confirmaSenha: string) {
    return (formGroup: FormGroup) => {
      let senhaCadastro = formGroup.controls[senha];
      let confirmaSenhaCadastro = formGroup.controls[confirmaSenha]
      if (
        confirmaSenhaCadastro.errors &&
        !confirmaSenhaCadastro.errors['confirmPasswordValidator']
      ) {
        return;
      }
      if (senhaCadastro.value !== confirmaSenhaCadastro.value) {
        confirmaSenhaCadastro.setErrors({ confirmPasswordValidator: true });
      } else {
        confirmaSenhaCadastro.setErrors(null);
      }
    };
  }

