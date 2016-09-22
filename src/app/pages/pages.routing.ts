import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { New } from './new/new.component';
import {Lead} from "./lead/lead.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },
  {
    path: 'register',
    loadChildren: () => System.import('./register/register.module')
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
      { path: 'editors', loadChildren: () => System.import('./editors/editors.module') },
      //{ path: 'components', loadChildren: () => System.import('./components/components.module') }
      { path: 'charts', loadChildren: () => System.import('./charts/charts.module') },
      { path: 'ui', loadChildren: () => System.import('./ui/ui.module') },
      { path: 'forms', loadChildren: () => System.import('./forms/forms.module') },
      { path: 'tables', loadChildren: () => System.import('./tables/tables.module') },
      { path: 'maps', loadChildren: () => System.import('./maps/maps.module') },
      {
        path: 'leads',
        component: Lead
      },
      {
        path: 'myleads',
        component: Lead
      }
    ]
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      {
        path: 'new',  // path for our page
        component: New, // component imported above
        data: { // custom menu declaration
          menu: {
            icon: 'ion-android-home', // menu icon
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
    ]
  },
];

export const routing = RouterModule.forChild(routes);
