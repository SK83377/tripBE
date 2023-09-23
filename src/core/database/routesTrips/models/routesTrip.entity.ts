import { Column, Model, Table, DataType } from "sequelize-typescript";

@Table({
    tableName: 'routes_trips',
})
export class RoutesTrip extends Model {
    @Column
    route_id: {
        type: typeof DataType.NUMBER,
        allowNull: false
    };
    @Column
    trip_date_time: {
        type: typeof DataType.NUMBER,
        allowNull: false
    };
    @Column
    finish_time: {
        type: typeof DataType.NUMBER,
        allowNull: false
    };
}