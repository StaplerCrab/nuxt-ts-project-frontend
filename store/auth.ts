import Cookies from 'js-cookie'
import User from '../interfaces/userinterface'

// Defining an empty state
export const state = () => {}

// Create a mutation that set a user to your state and in a 'user' cookie
export const mutations = {
  setUser(state: any , user: any) {
    state.user = user
    Cookies.set('user', user)
  }
}