interface Plugin {
  name: string
  calculate: (num: number) => this
}

/**
 * 计算器功能插件
 */
class Calculator {
  [x: string]: any
  plugins: Plugin[] = []
  num: number
  constructor(initial: number) {
    this.num = initial
  }
  use(plugin: Plugin) {
    this.plugins.push(plugin)
    this[plugin.name] = plugin.calculate.bind(this)
  }
  result() {
    return this.num
  }
}

class AddPlugin implements Plugin {
  name = 'add'
  num = 0
  calculate(num: number) {
    this.num = this.num + num
    return this
  }
}

class SubtractPlugin implements Plugin {
  name = 'subtract'
  num = 0
  calculate(num: number) {
    this.num = this.num - num
    return this
  }
}

// const myCalculator = new Calculator(5)
// myCalculator.use(new AddPlugin())
// myCalculator.use(new SubtractPlugin())

// console.log(myCalculator.add(5).subtract(2).result())

export default {
  Calculator,
  AddPlugin,
  SubtractPlugin
}
