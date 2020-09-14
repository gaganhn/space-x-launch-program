import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LaunchProgramFiltersComponent } from './components/launch-program-filters/launch-program-filters.component';
import { LaunchProgramCardComponent } from './components/launch-program-card/launch-program-card.component';
import { LaunchProgramCardListComponent } from './components/launch-program-card-list/launch-program-card-list.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LaunchProgramFiltersComponent,
    LaunchProgramCardComponent,
    LaunchProgramCardListComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
