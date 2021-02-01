const OlaMundo = {}

OlaMundo.install = function (Vue, options) {
    Vue.ola = () => {
        console.log('Olá mundo do Vue com método Global')
    }

    Vue.prototype.$ola = (options) => {
        console.log('Olá mundo do Vue com método de instância.')
    }

    Vue.directive('ola', {
        bind (el, binding, vnode, oldVnode){
            el.innerHTML = 'texto do plugin'
        }
    })

    Vue.mixin({
        created: () => {
            console.log('Created executado pleo plugin')
        }
    })
}
export default OlaMundo