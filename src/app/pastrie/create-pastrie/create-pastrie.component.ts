import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Pastrie } from '../pastrie';
import { PastrieService } from '../pastrie.service';
@Component({
  selector: 'app-create-pastrie',
  templateUrl: './create-pastrie.component.html',
  styleUrls: ['./create-pastrie.component.scss']
})
export class CreatePastrieComponent implements OnInit {
  pastrieForm!: FormGroup;
  formPreview$!:Observable<Pastrie>; 
  resultAdd:string;//convention nom observable se termine par un $

  constructor(private formBuilder: FormBuilder, private ps: PastrieService) { }

  ngOnInit(): void {
    this.pastrieForm = this.formBuilder.group( 
      {
        ref: [null, [Validators.required, Validators.minLength(8)]],
        name: [null, Validators.required], 
        description: [null, Validators.required], 
        quantity: [null, Validators.required], 
        order: [null, Validators.required], 
        url: [null], 
      });
      //pour que la forme de l'object renvoyé ressemble à une pastrie on le transform grace à pipe et map
    this.formPreview$ = this.pastrieForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue, // toutes les données du formulaire de base
        tags: [], 
        like:""
      }))
    )
  }

  onSubmitForm()
  {
    console.log(this.pastrieForm.value)
    this.ps.add(this.pastrieForm.value).subscribe(result => this.resultAdd = result)
  }
}
