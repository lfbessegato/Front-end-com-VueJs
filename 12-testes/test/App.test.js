import test from 'ava'
import { mount } from 'avoriaz'
import App from './../src/App.vue'

var componente = mount(App)

test('total sendo iniciado com o valor 0', t => {
    t.is( componente.data().total, 0 )
})

test('subtraindo um número do total', t => {
    let button = componente.find('button')[0]
    button.trigger('click')
    t.is( componente.data().total, -1 )
})

test('somando um numero do total', t => {
    let button = componente.find('button')[1]
    button.trigger('click')

    t.is( componente.data().total, 0 )
})