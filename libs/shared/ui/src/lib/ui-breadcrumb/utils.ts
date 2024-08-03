import { LabelWithRouter } from './models';

export const createBreadcrumb = (label: string, router: LabelWithRouter['routerLink']): LabelWithRouter => ({
  label,
  routerLink: router,
})
