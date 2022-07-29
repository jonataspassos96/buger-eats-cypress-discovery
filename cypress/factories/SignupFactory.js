const faker = require('faker')
const cpf = require('gerador-validador-cpf')

export default {
  deliver: () => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    return {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '11999999999',
      address: {
        postalcode: '04534011',
        street: 'Rua Joaquim Floriano',
        number: '1000',
        details: 'Ap 102',
        district: 'Itaim Bibi',
        city_state: 'São Paulo/SP'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }
  }
}
