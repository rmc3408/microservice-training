import bcrypt from 'bcryptjs'

class Password {
  static hash = password => {
    return bcrypt.hashSync(password, 2)
  }

  static verify = (storedPassword, unsurePassword) => {
    return bcrypt.compareSync(unsurePassword, storedPassword)
  }
}

export default Password
