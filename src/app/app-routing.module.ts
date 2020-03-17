import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test/test.component';
import {GalleryComponent} from './gallery/gallery.component';
import {LoginComponent} from './login/login.component';
import {HomepageComponent} from './homepage/homepage.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'test', component: TestComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

