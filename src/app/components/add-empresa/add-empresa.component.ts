import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { company } from 'src/app/shared/model/entities/company';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyService } from 'src/app/shared/model/service/company.service';
import { ActivatedRoute } from '@angular/router';
import { PlanServiceService } from 'src/app/shared/model/service/plan-service.service';
import { plan } from 'src/app/shared/model/entities/plan';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-empresa',
  templateUrl: './add-empresa.component.html',
  styleUrls: ['./add-empresa.component.css']
})
export class AddEmpresaComponent {
  estados = ['Active', 'Inactive'];
  plan: plan | undefined;
  constructor(private builder: FormBuilder, private companyService: CompanyService,
    private snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router,
    private planService: PlanServiceService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const planId = params['planId'];
      console.log('Plan ID:', planId);
  
      // Obtener el plan por ID
      if (planId) {
        this.planService.getPlan(+planId).subscribe(
          (plan: plan) => {
            console.log('Plan obtenido:', plan);
            this.plan = plan;
  
           
            if (this.plan && this.plan.duration) {
              const subscriptionStartDate = new Date(); 
              const subscriptionEndDate = new Date(subscriptionStartDate); 
              subscriptionEndDate.setMonth(subscriptionEndDate.getMonth() + this.plan.duration); 
              this.companyform.patchValue({ subscriptionEndDate }); 
            }
          },
          error => {
            console.error('Error al obtener el plan:', error);
          }
        );
      }
    });
    
    this.companyform.get('linkDate')?.disable();
    this.companyform.get('subscriptionEndDate')?.disable();
  }

  companyform = this.builder.group({
    nameCompany: this.builder.control('', Validators.required),
    nit: this.builder.control('', Validators.required),
    nameLegalRepresentative: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    phoneCompany: this.builder.control(0),
    numWorkers: this.builder.control(0),
    status: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    linkDate: [new Date(), Validators.required],
    subscriptionEndDate: [new Date(), Validators.required],
  });

  

  SaveCompany() {
    if (this.companyform.valid) {
      const subscriptionEndDate: Date = this.companyform.value.subscriptionEndDate || new Date(); 
  
      const companyData: company = {
        nameCompany: this.companyform.value.nameCompany || '',
        nit: this.companyform.value.nit || '',
        nameLegalRepresentative: this.companyform.value.nameLegalRepresentative || '',
        email: this.companyform.value.email || '',
        phoneCompany: this.companyform.value.phoneCompany || 0,
        numWorkers: this.companyform.value.numWorkers || 0,
        status: this.companyform.value.status || '',
        linkDate: new Date(),
        subscriptionEndDate: subscriptionEndDate,
        address: this.companyform.value.address || '',
      };
  
      this.companyService.agregarCompany(companyData).subscribe(
        response => {
          console.log('Empresa agregado correctamente:', companyData);
          this.router.navigate(['/metodo']);
        },
        error => {
          console.error('Error al agregar Empresa:', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
  

  clearform() {
    this.companyform.reset();
  }

  showSuccessMessage() {
    this.snackBar.open('La convocatoria se agregó con éxito', 'Cerrar', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
