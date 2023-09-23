import { Column, Model, Table, DataType } from "sequelize-typescript";

@Table({
    tableName: 'stations',
})
export class Station extends Model {
    @Column
    name: {
        type: typeof DataType.STRING,
        allowNull: false,
        validate: {
            len: [1, 40]
        }
    };

    @Column
    city: {
        type: typeof DataType.STRING,
        allowNull: false,
        validate: {
            len: [1, 30]
        }
    };

    @Column
    geo_pos: {
        type: typeof DataType.STRING,
        allowNull: true,
        validate: {
            len: [1, 30]
        }
    };
}