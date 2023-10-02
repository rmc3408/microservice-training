const { DataTypes } = require('sequelize');
import { sequelize } from '../sequelize'


export const Listings = sequelize.define('listings', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
