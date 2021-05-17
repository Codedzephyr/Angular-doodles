import {Component} from '@angular/core';


@Component({
    selector: 'courses',
    /*
    template: `
    <button class = "btn btn-primary" [class.active] = "isActive">Save</button>
    `
    */
   /*
   template:`
   <div (click) = "onDivClicked()">
   <button (click) = "onSave()">Save</button>
   </div>
   `
   */
  /*
  template: `
  <input [(ngModel)] = "email" (keyup.enter) = "onKeyUp()"/>
  `
  */
 /*
 template:`
 {{course.title | uppercase | lowercase }}<br/>
 {{course.students| number}} <br/>
 {{course.rating| number:'2.1-1'}} <br/>
 {{course.price | currency : 'AUD':true: '3.2-2'}}<br/>
 {{course.releaseDate| date: 'full Date' }}
 `
*/

template:`
{{text | summary: 10}}
<span class="glyphicon glyphicon-indent-left"></span>
<span class="bi bi-star"></span>
<p>Needs</p>
`
})

export class CourseComponent{
    isActive = true;
    onSave(){
        console.log("button as clicked");
    }
    onDivClicked(){
        console.log("Div as clicked")
    }
    $event:any;
    email = "me@example.com";

    onKeyUp(){
        console.log(this.email);
    }

    course ={
        title: "The Complete Angular Course",
        rating: 4.975,
        students: 30123,
        price:190.95,
        releaseDate: new Date(2016,3,1)
    }
    text = `loremSJHFISDHIFO DSHFOD JHOSHLDZNLZCNVLCN
    VZKVJIZOJV ZOJNOZNOZH N VPOCJvpdjxP VHCNSPAVHPOZDHPHV
    dusghifvsz giozvhohv zho;vj; p vnvncl xvnzn nvccvllcmv
     dkccvjboj hdisohfvosd idsshfidsh dsiohfodshsd
     dvnlcnv  vpkdpsjv dsvkbhfolbfhodklfvn skdvnnsdlz`



}