'use strict'

const signUpSuccess = () => {
  $('#sign-up').hide()
  $('.email-input').val('')
  $('.password-input').val('')
}

const signInSuccess = () => {
  $('.email-input').val('')
  $('.password-input').val('')
  $('#sign-up').show().hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
}

const changePasswordSuccess = () => {
  $('.old-password').val('')
  $('.new-password').val('')
}

const signOutSuccess = () => {
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
}
