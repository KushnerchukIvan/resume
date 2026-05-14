import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { AboutComponent } from './components/about-component/about-component';
import { SkillsComponent } from './components/skills-component/skills-component';
import { ProjectsComponent } from './components/projects-component/projects-component';
import { ContactComponent } from './components/contact-component/contact-component';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];
