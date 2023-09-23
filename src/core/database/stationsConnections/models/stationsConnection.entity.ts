import { Column, Model, Table, DataType } from "sequelize-typescript";

@Table({
    tableName: 'stations_connections',
})
export class StationsConnection extends Model {
    @Column
    trip_id: {
        type: typeof DataType.NUMBER,
        allowNull: false
    };
    @Column
    order_in_trip: {
        type: typeof DataType.NUMBER,
        allowNull: false
    };
    @Column
    start_station_id: {
        type: typeof DataType.NUMBER,
        allowNull: false
    };
    @Column
    finish_station_id: {
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
    @Column
    free_places: {
        type: typeof DataType.NUMBER,
        allowNull: false
    };
    @Column
    distance: {
        type: typeof DataType.NUMBER,
        allowNull: false
    };
}