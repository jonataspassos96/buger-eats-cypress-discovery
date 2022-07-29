import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {

  /* beforeEach(function () {
    cy.fixture('deliver').then(d => {
      this.deliver = d
    })
  }) */

  it('User shoul be deliver', function () {
    const deliver = signupFactory.deliver()

    signupPage.go()
    signupPage.fillForm(deliver)
    signupPage.submit()

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signupPage.modalContentShouldBe(expectedMessage)
  })

  it('Incorrect document', function () {
    const deliver = signupFactory.deliver()

    deliver.cpf = 'x00000141AA'

    signupPage.go()
    signupPage.fillForm(deliver)
    signupPage.submit()
    signupPage.alertMessageShouldBe('Oops! CPF inválido')
  })

  it('Incorrect email', function () {
    const deliver = signupFactory.deliver()

    deliver.email = 'jonatas.mail.com'

    signupPage.go()
    signupPage.fillForm(deliver)
    signupPage.submit()
    signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
  })

})
