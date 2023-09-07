import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product-card/product-card.component';
import { MainComponent } from './components/main/main.component';
import { CharactersLimitationPipe } from './pipes/characters-limitation.pipe';
import { CurrencyEuroPipe } from './pipes/currency-euro.pipe';
import { ProductPageComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReplaceCommasPipe } from './pipes/replace-commas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MainComponent,
    CharactersLimitationPipe,
    CurrencyEuroPipe,
    ProductPageComponent,
    ReplaceCommasPipe,
  ],
  imports: [BrowserModule, RouterModule.forRoot([]), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
