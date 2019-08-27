import { ExampleActionTypes } from '@types'

const verifyClient = email => ({
  type: ExampleActionTypes.VERIFY_CLIENT,
  email
})

export default {
  verifyClient,
}
