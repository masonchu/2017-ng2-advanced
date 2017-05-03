import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[show-loading]'
})
export class LoadingDirective {

  constructor() { }

  @HostListener('click', ['$event.target'])
  showLoading(target: HTMLButtonElement) {
    const old = target.value;
    target.value = 'loading......';
    setTimeout(() => { target.value = old }, 3000);
  }
}
