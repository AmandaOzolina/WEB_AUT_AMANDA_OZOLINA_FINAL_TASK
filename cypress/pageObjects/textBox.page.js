class TextBoxPage {
  
  static get nameField() {
     return cy.get("#firstName");
   }
   static get surnameField() {
    return cy.get("#lastName");
  }
  static get emailField() {
    return cy.get("#userEmail");
  }
  static get genderOptions() {
     return cy.get("[for='gender-radio-2']");
   }
   static get numberField() {
    return cy.get("#userNumber");
  }
  static get openCalendar() {
     return cy.get("#dateOfBirthInput");
   }
   static get setMonth() {
    return cy.get(".react-datepicker__month-select");
  }
  static get setYear() {
    return cy.get(".react-datepicker__year-select");
  }
  static get setDate() {
    return cy.get(".react-datepicker__day--028");
  }
  static get subjectField() {
    return cy.get(".subjects-auto-complete__control");
  }
  static get hobbyOption() {
    return cy.get("[class='custom-control custom-checkbox custom-control-inline']");
  }
  static get uploadPicture() {
    return cy.get("input[type=file]");
  }
  static get addressField() {
    return cy.get("#currentAddress");
  }
  static get stateOptions(){
    return cy.get("#react-select-3-input");
  }
  static get cityOptions(){
    return cy.get("#react-select-4-input");
  }
  static get submitButton(){
    return cy.get("[class='btn btn-primary']");
  }
 

  static get validateTable(){
    return cy.get(".table-responsive table tr td:nth-child(even)");
    
  //  return cy.get(".table-responsive");
  }
  
  // static get validateFacility() {
  //   return cy.get("#facility");
  // }
  // static get validateReadmission() {
  //   return cy.get("#hospital_readmission");
  // }
  // static get validateHealthcareProgram() {
  //   return cy.get("#program");
  // }
  // static get validateDate() {
  //   return cy.get("#visit_date");
  // }
  // static get validateComment() {
  //   return cy.get("#comment");
  // }

  // static get menuSymbol() {
  //   return cy.get(".fa-bars");
  // }
  // static get validateSidebar() {
  //   return cy.get("#sidebar-wrapper");
  // }
  // static get historySidebar() {
  //   return cy.get("[href='history.php#history']");
  // }
  // static get logoutSidebar() {
  //   return cy.get("[href='authenticate.php?logout']");
  // }
  // static get appointmentHystory() {
  //   return cy.get(".col-sm-12 p");
  // }
 


}

export default TextBoxPage;