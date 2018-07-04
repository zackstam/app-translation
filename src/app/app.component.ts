import { Component } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'in']);
    translate.setDefaultLang('in');
    
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|in/) ? browserLang : 'in');
  }
  useLanguage(lang: string) {
    console.log(lang);
    this.translate.use(lang);
  }
}
