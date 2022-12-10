var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`, //chamando o fake name
            cpf: cpf.generate(), // chamando o gerador de cpf
            email: faker.internet.email(firstName),
            whatsapp: '83999999999',
            address: {
                postalcode: '58051120',
                street: 'Rua General Alfredo Floro Cantalice',
                number: '269',
                details: 'Ap 302',
                district: 'Bancários',
                city_state: 'João Pessoa/PB'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }

}