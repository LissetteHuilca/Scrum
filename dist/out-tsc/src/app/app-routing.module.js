import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { InicioComponent } from './components/inicio/inicio.component';
export var routes = [
    { path: 'productos', component: ProductosComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'politicas', component: PoliticasComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'inicio', component: InicioComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map