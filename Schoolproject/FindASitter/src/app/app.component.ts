import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Find A Baby Sitter';

  onClickSitter(){
    this.title = "Sitter"
  console.log("user clicked View Sitter");
}
  onClickBaby(){
    this.title = "Baby"
  console.log("user clicked View Baby");
}

}
