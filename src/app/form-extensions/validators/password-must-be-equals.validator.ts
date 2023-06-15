import {
    AbstractControl,
    FormControl,
    ValidationErrors,
    ValidatorFn,
  } from '@angular/forms';
  
  export const passwordsMustBeEqual: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    const newPassword = group.get('password') as FormControl;
    const passwordConfirm = group.get('confirm_password') as FormControl;
  
    return newPassword.value === passwordConfirm.value
      ? null
      : { passwordsMustBeEqual: true };
  };
  