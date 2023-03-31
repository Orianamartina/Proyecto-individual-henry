
const {DataTypes} = require ("sequelize");


module.exports = (sequelize) => {
    sequelize.define("Temperament",{

        temperamentName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        

    },{timestamps: false}
    )
}