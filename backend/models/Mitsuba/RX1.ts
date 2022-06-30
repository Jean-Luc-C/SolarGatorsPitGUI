'use strict';
import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table
export default class Mitsuba_RX1 extends Model {
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    powerMode: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    MCmode: boolean

    @Column({
        type: DataType.INTEGER,
        defaultValue: null
    })
    acceleratorPosition: number

    @Column({
        type: DataType.INTEGER,
        defaultValue: null
    })
    regenVRposition: number

    @Column({
        type: DataType.INTEGER,
        defaultValue: null
    })
    digitSWposition: number

    @Column({
        type: DataType.INTEGER,
        defaultValue: null
    })
    outTargetVal: number

    @Column({
        type: DataType.INTEGER,
        defaultValue: null
    })
    driveActStat: number

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    regenStat: boolean
}
