const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
  createdAt: { type: Date },
  username: { type: String, required: true },
  password: { type: String, required: true, select: false }
}, { timestamps: { createdAt: 'created_at' } })

UserSchema.pre('save', function (next) {
  // ENCRYPT PASSWORD
  const user = this
  if (!user.isModified('password')) {
    return next()
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) console.error(err)
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) console.error(err)
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function (password, done) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch)
  })
}

module.exports = mongoose.model('User', UserSchema)
