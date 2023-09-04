import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from './loading/loading.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mf-shell';

  public currentComponent: any = LoadingComponent

  async ngOnInit() {
    const module = await  loadRemoteModule({
      type:'module',
      remoteEntry: 'http://localhost:4300/remoteEntry.js',
      exposedModule: './Component'
    })
    this.currentComponent = module.AppComponent

  }
}
