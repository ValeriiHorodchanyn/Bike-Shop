import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductPageComponent } from 'src/app/components/product/product.component';
import { MainComponent } from 'src/app/components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'products', component: MainComponent },
  { path: 'products/:id', component: ProductPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
