import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.scss']
})
export class AddInfoComponent implements OnInit {
  registerForm: FormGroup;
  portfolioForm: FormGroup;
  submitted = false;
  modalRef: BsModalRef;


  constructor(private formBuilder: FormBuilder,private _router: Router, private modalService: BsModalService ) {

  }

  ngOnInit(): void {
    this.createPortfolioForm();
    if(localStorage.getItem('portfolio-data') != null){
      var data=JSON.parse(localStorage.getItem('portfolio-data'));

      for (let index = 1; index < data.personal.education.length; index++) {
        this.educationArray.push(this.createEducation());        
      }
      
      for (let index = 1; index < data.personal.skill.length; index++) {
        this.skillArray.push(this.createSkill());        
      }
      
      for (let index = 1; index < data.professional.length; index++) {
        this.professionalArray.push(this.createProfessional());        
      }
      this.portfolioForm.patchValue(data);
    }
  }

  public createPortfolioForm(){
    this.portfolioForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      jobProfile: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      personal: this.formBuilder.group({
        education:  this.formBuilder.array([this.createEducation()]),
        skill:  this.formBuilder.array([this.createSkill()]),
      }),
      professional: this.formBuilder.array([this.createProfessional()])
    });
  }

  get formcontrol() { return this.portfolioForm.controls; }

  get professionalArray() {
    return this.formcontrol.professional as FormArray;
  }

  get personalArray() {
    return this.formcontrol.personal as FormArray;
  }

  get educationArray(): FormArray {
    return this.formcontrol.personal['controls'].education as FormArray;
  }

  get skillArray(): FormArray {
    return this.formcontrol.personal['controls'].skill as FormArray;
  }


  public createEducation (): FormGroup {
    return this.formBuilder.group({
      year: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public createSkill(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      percentage: ['', Validators.required],
    });
  }

 public createProfessional (): FormGroup {
    return this.formBuilder.group({
      companyName: ['', Validators.required],
      profile: ['', Validators.required],
      durationFrom: ['', Validators.required],
      durationTo: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public addEduction(event){
    event.stopPropagation();
    this.educationArray.push(this.createEducation());
  }
  public addSkill(event){
    event.stopPropagation();
    this.skillArray.push(this.createSkill());
  }
  public addCompany(event){
    event.stopPropagation();
    this.professionalArray.push(this.createProfessional());
  }

  onSubmit() {
    this.submitted = true;
     if (this.portfolioForm.invalid) {
        return;
      }else{
        localStorage.setItem('portfolio-data',JSON.stringify(this.portfolioForm.getRawValue()));
        alert("Data Save successfully.");
        this._router.navigate(['/portfolio']);
      }
   
  }

  onReset() {
    this.submitted = false;
    this.portfolioForm.reset();
    this.createPortfolioForm();
    localStorage.clear();
    this.modalRef.hide();
  }

  public previewUrl(){
    this._router.navigate(['/portfolio']);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm modal-dialog-centered' });
  }

 
  decline(): void {
    this.modalRef.hide();
  }
}
