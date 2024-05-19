describe("SiparisFormSayfasi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/siparis-form");
  });

  it("form sorunsuz dolduruldu.", () => {
    cy.get('input[name="isimSoyisim"]').type("Mustafa Redifoğlu");

    cy.get('input[value="büyük"]').check();

    cy.get('select[name="kalınlık"]').select("ince");

    cy.get('input[name="Sosis"]').check();
    cy.get('input[name="Sucuk"]').check();
    cy.get('input[name="Jalapeno"]').check();
    cy.get('input[name="Ananas"]').check();
    cy.get('input[name="Soğan"]').check();

    cy.get('textarea[name="not"]').type("Cypress test ediyorum.");

    cy.get(".arttir").click();

    cy.get("button").contains("Sipariş Ver").click();

    cy.url().should("include", "/siparis-onay");
  });

  it("isim inputuna yeterli harf girilmediğinde form gönderilmez", () => {
    cy.get('input[name="isimSoyisim"]').type("MR");

    cy.get('input[value="büyük"]').check();

    cy.get('select[name="kalınlık"]').select("ince");

    cy.get('input[name="Sosis"]').check();
    cy.get('input[name="Mısır"]').check();
    cy.get('input[name="Sarımsak"]').check();
    cy.get('input[name="Biber"]').check();
    cy.get('input[name="Ananas"]').check();
    cy.get('input[name="Kabak"]').check();
    cy.get('input[name="Sucuk"]').check();
    cy.get('input[name="Tavuk Izgara"]').check();

    cy.get('textarea[name="not"]').type("Cypress testten geçemeyeceksin");

    cy.get(".arttir").click();

    cy.get("button").contains("Sipariş Ver").should("be.disabled");
  });
});
