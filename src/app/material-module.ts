import {NgModule} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    exports: [
        MatGridListModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule
    ]
  })

export class CustomMaterialModule {}