import { DataTypes } from 'sequelize'
import { sequelize } from '../sequelize'


export const Users = sequelize.define('users', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  }  
})

export const Session = sequelize.define('session', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: {
        tableName: 'users',
      },
      key: 'id',
    },
  },
  expiredAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
})