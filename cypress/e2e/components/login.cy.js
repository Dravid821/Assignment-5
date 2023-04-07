describe("login", () => {
    it("visibility of login page element", () => {
        cy.visit('http://localhost:3000/login');
        cy.get('#submit').should('be.visible');
        cy.get('#email').should('be.visible');
        cy.get('#password').should('be.visible');
    })
    it("if invalid Credential", () => {
        cy.window().then((win) => {
          win.localStorage.setItem("isLogin", false);
          win.localStorage.setItem(
            "signUpData",
            JSON.stringify([
              {
                isActive: false,
                first_name: "Dravid",
                last_name: "Solanki",
                mobile: "8988898884",
                email: "dravid123@gmail.com",
                password: "U2FsdGVkX19eCusNjGZv8OlL8AK3WUer20aRQV9o/E=",
              },
            ])
          );
        });
        cy.visit("http://localhost:3000/login");
        cy.get("#email").type("dravid123@gmail.com");
        cy.get("#password").type("Dravid@123");
        cy.get("#submit").click();
      });
        it(" allow users to login", () => {
        cy.window().then((win) => {
          win.localStorage.setItem("isLogin", false);
          win.localStorage.setItem(
            "signUpData",
            JSON.stringify([
              {
                isActive: false,
                first_name: "Dravid",
                last_name: "Solanki",
                mobile: "8988898884",
                email: "dravid123@gmail.com",
                password: "U2FsdGVkX19eCusNjGZv8OlL8AK3WUer20aRQV9o/fE=",
              },
            ])
          );
        });
        cy.visit("http://localhost:3000/login");
        cy.get("#email").type("dravid123@gmail.com");
        cy.get("#password").type("Dravid@123");
        cy.get("#submit").click();
      });
  
});
