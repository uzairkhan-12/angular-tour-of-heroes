import { Component, OnInit } from '@angular/core';
import { NewHero } from '../NewHero';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
powers = ['Really smart','Super Flexible','Supter Hot' , 'Weather Changer'];
model = new NewHero(18 , 'Dr AQ' , this.powers[0],'Chunk Overstreet')
submitted = false
onSubmit(){this.submitted = true}
newHero(){
  this.model = new NewHero(42,'','')
}
skyDot(): NewHero {
  const myHero = new NewHero(42,'Skydog','Fetch any object at any distance','Leslie Rollover')
  console.log('My Hero is called '+myHero.name)
  return myHero
}
showFormControls(form : any){
  return form && form.controls.name && form.controls.name.value
}
  constructor() { }

  ngOnInit(): void {
  }

}
