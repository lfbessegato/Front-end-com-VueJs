import test from 'ava'
import LvContato from './../src/LvContato.vue'
import { mount } from 'avoriaz'

var componente = mount(LvContato)

test('valor inicial do componente', t => {
	t.is( componente.data().valor, 'Luciano' )
})

test('tranformando em minusculo', t => {
	let button = componente.find('button')[0]
	button.trigger('click')

	t.is( componente.data().valor, 'luciano' )
})

test('tranformando em maiusculo', t => {
	let button = componente.find('button')[1]
	button.trigger('click')

	t.is( componente.data().valor, 'LUCIANO' )
})

test('limpando texto', t => {
	let button = componente.find('button')[2]
	button.trigger('click')

	t.is( componente.data().valor, '' )
})