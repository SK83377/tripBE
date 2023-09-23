import { Column, Model, Table, DataType } from "sequelize-typescript";

@Table({
    tableName: 'routes_stations',
})
export class RoutesStation extends Model {
    @Column
    station_id: {
        type: typeof DataType.NUMBER,
        allowNull: false
    };
    @Column
    route_id: {
        type: typeof DataType.NUMBER,
        allowNull: false
    };
    @Column
    order_in_route: {
        type: typeof DataType.NUMBER,
        allowNull: false
    };
    @Column
    time_arr: {
        type: typeof DataType.NUMBER,
        allowNull: false
    };
    @Column
    time_dep: {
        type: typeof DataType.NUMBER,
        allowNull: true
    };
}