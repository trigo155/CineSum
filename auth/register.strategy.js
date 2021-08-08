const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { validateEmail, ValidatePass } = require('./utils')
const User = require('../models/User.model');



const registerStrategy = new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
    },
    async(req, email, password, done) => {
        try {
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                const error = new Error('Usuario registrado');
                return done(error);
            }

            const isValidEmail = validateEmail(email);

            if (!isValidEmail) {
                const error = new Error('El email es incorrecto. No cumple formato email');
                return done(error);
            }

            const isValidPassword = ValidatePass(password);

            if (!isValidPassword) {
                const error = new Error('Contraseña entre 6 y 20 caracteres, minúscula, mayúscula y un número');
                return done(error);
            }

            const saltRounds = 9;
            const hash = await bcrypt.hash(password, saltRounds);

            const newUser = new User({
                email,
                password: hash,
                name: req.body.name,
            });

            const savedUser = await newUser.save();
            savedUser.password = undefined; // Very important to security
            return done(null, savedUser);

        } catch (error) {
            return done(error);
        }
    });

module.exports = registerStrategy;