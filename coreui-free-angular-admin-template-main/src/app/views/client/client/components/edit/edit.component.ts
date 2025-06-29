import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../../../../providers/services/client.service";
import {Client} from "../../models/client";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent, ColComponent,
  FormControlDirective, RowComponent
} from "@coreui/angular";
import {IconComponent} from "@coreui/icons-angular";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    ButtonDirective,
    FormControlDirective,
    ColComponent,
    IconComponent,
    RowComponent
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {
  clientId: number=0;
  client= new Client();
  clientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),

  });
constructor(private activatedRoute:ActivatedRoute,
            private clientService:ClientService,
            private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.clientId = params['id'];
      this.getClient(this.clientId);
    })
  }
  getClient(id:number) {
  this.clientService.getById$(id).subscribe(response => {
    this.client = response;
    this.clientForm.patchValue(this.client);
  });
  }

  save() {
this.clientService.update$(this.clientId, this.clientForm.value).subscribe(response => {
  this.clientForm.reset();
  this.router.navigate(['/client']);
})
  }

  goBack() {
    this.router.navigate(['/client'], { state: { reload: true } });
  }
}
