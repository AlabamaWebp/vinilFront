import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CorsService } from '../services/cors.service';

export const authGuard: CanActivateFn = (route, state) => {
  const cors = inject(CorsService);
  const answer = !!cors.login;
  return answer;
};
