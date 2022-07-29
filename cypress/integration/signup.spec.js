import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {

  /* beforeEach(function () {
    cy.fixture('deliver').then(d => {
      this.deliver = d
    })
  }) */

  it('User shoul be deliver', () => {
    const deliver = signupFactory.deliver()

    signupPage.go()
    signupPage.fillForm(deliver)
    signupPage.submit()

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signupPage.modalContentShouldBe(expectedMessage)
  })

  it('Incorrect document', () => {
    const deliver = signupFactory.deliver()

    deliver.cpf = 'x00000141AA'

    signupPage.go()
    signupPage.fillForm(deliver)
    signupPage.submit()
    signupPage.alertMessageShouldBe('Oops! CPF inválido')
  })

  it('Incorrect email', () => {
    const deliver = signupFactory.deliver()

    deliver.email = 'jonatas.mail.com'

    signupPage.go()
    signupPage.fillForm(deliver)
    signupPage.submit()
    signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
  })

  context('Required fields', () => {
    const messages = [
      { field: 'name', output: 'É necessário informar o nome' },
      { field: 'cpf', output: 'É necessário informar o CPF' },
      { field: 'email', output: 'É necessário informar o email' },
      { field: 'postalcode', output: 'É necessário informar o CEP' },
      { field: 'number', output: 'É necessário informar o número do endereço' },
      { field: 'delivery_method', output: 'Selecione o método de entrega' },
      { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
    ]

    before(() => {
      signupPage.go()
      signupPage.submit()
    })

    messages.forEach(msg => {
      it(`${msg.field} is required`, () => {
        signupPage.alertMessageShouldBe(msg.output)
      })
    })
  })

})
