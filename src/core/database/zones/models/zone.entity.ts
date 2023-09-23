import { Column, Model, Table, DataType } from "sequelize-typescript";

@Table({
    tableName: 'zones',
})
export class Zone extends Model {
    @Column
    zone_num: {
        type: typeof DataType.NUMBER,
        allowNull: false
    };
    @Column
    max_dist: {
        type: typeof DataType.NUMBER,
        allowNull: false
    };
    @Column
    price: {
        type: typeof DataType.NUMBER,
        allowNull: false
    };
}