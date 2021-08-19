import moment from 'moment'

export const state = () => ({
  customers: []
})

export const mutations = {
  add (state, item) {
    state.customers.push(item)
    // localStorage.setItem('customers', JSON.stringify(state))
  },

  toggle (state, item) {
    item.taken = !item.taken
  },

  delete (state, id) {
    state.customers = state.customers.filter(cust => cust.id !== id)
    return state.customers
  }
}

export const getters = {
  get (state) {
    return state.customers
  },

  getIncome (state) {
    const total = state.customers.filter(item => item.taken === true).reduce((acc, item) => (acc + parseInt(item.price)), 0)
    return total
  },

  getIncomeByMonth (state) {
    const currMonth = moment().month() + 1
    const total = state.customers.filter(item => item.taken === true && moment(item.date_in, 'D/M/YYYY').month() + 1 === currMonth).reduce((acc, item) => (acc + parseInt(item.price)), 0)
    return total
  },

  getTotalCustomer (state) {
    return state.customers.length
  },

  getMonthlyCustomer (state) {
    const currMonth = moment().month() + 1
    const total = state.customers.filter(item => moment(item.date_in, 'D/M/YYYY').month() + 1 === currMonth).length
    return total
  }
}
