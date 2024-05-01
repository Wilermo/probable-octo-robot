import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { company } from 'src/app/shared/model/entities/company';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyService } from 'src/app/shared/model/service/company.service';

@Component({
  selector: 'app-add-empresa',
  templateUrl: './add-empresa.component.html',
  styleUrls: ['./add-empresa.component.css']
})
export class AddEmpresaComponent {
  estados = ['Active','Inactive'];

  constructor(private builder: FormBuilder, private companyService: CompanyService,
  private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.companyform.setValue({
      nameCompany: 'Ajaaa', 
      nit: 'MeVale',
      nameLegalRepresentative: 'Monda',
      email: 'aaaaaaa@gmail.com',
      phoneCompany: 'Jave',
      numWorkers: '51',
      address: 'Inicial',
      linkDate: new Date(),
      subscriptionDate: new Date(),
      status: 'Active'
    });
  }

  companyform = this.builder.group({
    nameCompany: this.builder.control('', Validators.required),
    nit: this.builder.control('', Validators.required),
    nameLegalRepresentative: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    phoneCompany: this.builder.control('', Validators.required),
    numWorkers: this.builder.control('', Validators.required),
    status: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    linkDate: [new Date(), Validators.required],
    subscriptionDate: [new Date(), Validators.required],
  });

  Savecompany() {
    if (this.companyform.valid) {
      const companyData: company = {
        nameCompany: this.companyform.value.nameCompany || '', 
        nit: this.companyform.value.nit|| '',
        nameLegalRepresentative: this.companyform.value.nameLegalRepresentative || '',
        email: this.companyform.value.email || '',
        phoneCompany: this.companyform.value.phoneCompany || '',
        numWorkers: this.companyform.value.numWorkers || '',
        status: this.companyform.value.status || '',
        linkDate: new Date(),
        subscriptionDate: new Date(),
        address: this.companyform.value.emergencyContact || '',
      };
      this.aspiranteService.agregarAspirante(aspiranteData).subscribe(
        response => {
          console.log('Aspirante agregado correctamente:', response);
          this.showSuccessMessage();
        },
        error => {
          
          console.error('Error al agregar aspirante:', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }

  clearform() {
    this.companyform.reset();
  }
  loadOfertas(): void {
    this.convocatoriaService.getConvocatorias().subscribe(
      (convocatorias: convocatoria[]) => {
        // Mapeamos las convocatorias para obtener solo los títulos de las ofertas
        this.ofertas = convocatorias.map(convocatoria => convocatoria.tittleOffer);
      },
      error => {
        console.error('Error al cargar las ofertas:', error);
      }
    );
  }
  showSuccessMessage() {
    this.snackBar.open('La convocatoria se agregó con éxito', 'Cerrar', {
      duration: 3000, 
      verticalPosition: 'top' 
    });
  }
}
