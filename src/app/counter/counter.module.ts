import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter.component";

@NgModule({
    declarations: [CounterComponent],
    // este export expone el modulo al mundo exterior, fuera de la carpeta counter
    exports: [CounterComponent]
})
export class CounterModule { }