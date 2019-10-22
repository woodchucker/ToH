import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroParentComponent } from './components/hero-parent.component';
import { NameParentComponent } from './components/name-parent.component';
import { VersionParentComponent } from './components/version-parent/version-parent.component';
import { VoteTakerComponent } from './components/votetaker/votetaker.component';
import { CountdownParentComponent } from './components/countdown-parent/countdown-parent.component';


const routes: Routes = [

   { path: 'heroparent', component: HeroParentComponent }
  ,{ path: 'nameparent', component: NameParentComponent }
  ,{ path: 'versionparent', component: VersionParentComponent }
  ,{ path: 'votetaker', component: VoteTakerComponent }
  ,{ path: 'countdown', component: CountdownParentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
