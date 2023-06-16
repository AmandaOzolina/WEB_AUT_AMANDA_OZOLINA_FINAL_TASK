import TextBoxPage from "../../pageObjects/textBox.page";

describe("Appointment", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/automation-practice-form")
  });

  it("Final Task", () => {

    // Actions
    TextBoxPage.nameField.type("Anna");
    TextBoxPage.surnameField.type("Vanna");
    TextBoxPage.emailField.type("anna.vanna@epasts.com");
    TextBoxPage.genderOptions.click();
    TextBoxPage.numberField.type("1234567890");
    TextBoxPage.openCalendar.click();
    TextBoxPage.setMonth.select("1").invoke("val");
    TextBoxPage.setYear.select("1930").invoke("val");
    TextBoxPage.setDate.last().click();
    TextBoxPage.subjectField.type("Eco{enter}");
    TextBoxPage.hobbyOption.eq(2).click();
    TextBoxPage.uploadPicture.selectFile('files/picture.png', { force: 'true' });
    TextBoxPage.addressField.type("Planet Earth");

    TextBoxPage.stateOptions.type("NCR{enter}",{ force: true });
    TextBoxPage.cityOptions.type("Delhi{enter}", { force: true });
    TextBoxPage.submitButton.click({ force: true });


    // Validation
 

    
    TextBoxPage.validateTable.should('contain', 'Anna');
    TextBoxPage.validateTable.should('contain','Vanna');
    TextBoxPage.validateTable.should('contain','anna.vanna@epasts.com');
    TextBoxPage.validateTable.should('contain','Female');
    TextBoxPage.validateTable.should('contain','1234567890');
    TextBoxPage.validateTable.should('contain','Economics');
    TextBoxPage.validateTable.should('contain','Music');
    TextBoxPage.validateTable.should('contain','picture.png');
    TextBoxPage.validateTable.should('contain','Planet Earth');
    TextBoxPage.validateTable.should('contain','NCR Delhi');

    // TextBoxPage.validateFacility.should('have.text', 'Seoul CURA Healthcare Center'); 
    // TextBoxPage.validateReadmission.should('have.text', 'Yes');
    // TextBoxPage.validateHealthcareProgram.should('have.text', 'Medicaid');
    // TextBoxPage.validateDate.should('have.text', '30/06/2023');
    // TextBoxPage.validateComment.should('have.text', 'CURA Healthcare Service');



// //Validate
// BasePage.table.should('contain','Doe John');
// BasePage.table.should('contain','doe.john@va.lv');
// BasePage.table.should('contain','Female');
// BasePage.table.should('contain','3712888888');
// BasePage.table.should('contain','28 February,1930');
// BasePage.table.should('contain','Economics');
// BasePage.table.should('contain','Music');
// BasePage.table.should('contain','dogo.jpg');
// BasePage.table.should('contain','This is Doe Johns address');
// BasePage.table.should('contain','NCR');
// BasePage.table.should('contain','Delhi');
// })



    
    // TextBoxPage.appointmentButton.click();

    // TextBoxPage.facilityOptions.select("Seoul CURA Healthcare Center").invoke("val");     //.should("eq", "Seoul CURA Healthcare Center");
    // TextBoxPage.checkBox.check();
    // TextBoxPage.setDate.click();
    // TextBoxPage.setSpecificDate.contains('30').click();
    // TextBoxPage.healtcareOptions.click();
    // TextBoxPage.commentField.type("CURA Healthcare Service");
    // TextBoxPage.bookAppointment.click();
    
    // // Validation

    // TextBoxPage.validateFacility.should('have.text', 'Seoul CURA Healthcare Center'); 
    // TextBoxPage.validateReadmission.should('have.text', 'Yes');
    // TextBoxPage.validateHealthcareProgram.should('have.text', 'Medicaid');
    // TextBoxPage.validateDate.should('have.text', '30/06/2023');
    // TextBoxPage.validateComment.should('have.text', 'CURA Healthcare Service');

    // TextBoxPage.menuSymbol.click();
    // TextBoxPage.logoutSidebar.click();    
  });
  
  //  it("Appointment history empty", () => {
  //   TextBoxPage.appointmentButton.click();

  //   TextBoxPage.usernameField.type("John Doe");
  //   TextBoxPage.passwordField.type("ThisIsNotAPassword");
  //   TextBoxPage.loginButton.click();

  //   TextBoxPage.menuSymbol.click();
  //   TextBoxPage.validateSidebar.should('have.class', 'active')
  //   TextBoxPage.historySidebar.click();
  //   TextBoxPage.appointmentHystory.should('have.text', 'No appointment.')
  // });

});