describe("SiparisFormSayfasi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/siparis-form");
  });

  it("form dolduruldu", () => {
    cy.get('input[name="isimSoyisim"]').type("Mustafa Redifoğlu");

    cy.get('input[value="büyük"]').check();

    cy.get('select[name="kalınlık"]').select("ince");

    cy.get('input[name="Sosis"]').check();
    cy.get('input[name="Sucuk"]').check();

    cy.get('textarea[name="not"]').type("Cypress test ediyorum.");

    cy.get(".arttir").click();

    cy.get("button").contains("Sipariş Ver").click();

    cy.url().should("include", "/siparis-onay");
  });
});
