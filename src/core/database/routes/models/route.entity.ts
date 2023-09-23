import { Column, Model, Table, DataType } from "sequelize-typescript";

@Table({
    tableName: 'routes',
})
export class Route extends Model {
    @Column
    route_name: {
        type: typeof DataType.STRING,
        allowNull: false,
        validate: {
            len: [1, 10]
        }
    };
}