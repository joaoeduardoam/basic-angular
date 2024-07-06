import { CanActivateFn, Router } from '@angular/router';

export const routeGuard: CanActivateFn = (route, state) => {

  //Constant

  const myRoute = new Router;

  if(localStorage.getItem('name') === 'Joao'){
    return true;
  }else{
    myRoute.navigateByUrl('page1');
    return false;
  }
  


};
