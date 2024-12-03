import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { ViewComponent } from './common/view/view.component';
import { SettingComponent } from './pages/setting/setting.component';
import { ProjectComponent } from './pages/project/project.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'view',
        component:ViewComponent,
        children:[
            {
                path:'setting',
                component:SettingComponent
            },
            {
                path:'project',
                component:ProjectComponent
            },
            {
                path:'calendar',
                component:CalendarComponent
            },
            {
                path:'',
                redirectTo:'project',
                pathMatch:'full'
            }
        ]
    },
    {
        path:'',
        redirectTo:'view',
        pathMatch:'full'
    }
];
