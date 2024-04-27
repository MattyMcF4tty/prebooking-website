export interface VehicleSchema {
  id: number;
  createdAt: string;
  fuelPercentage: number;
  type: number;
  numberPlate: string;
  state: number;
  reserved: boolean;
}

/* export class Vehicle implements VehicleSchema {
  id: number;
  createdAt: string;
  fuelPercentage: number;
  type: number;
  numberPlate: string;
  state: number;
  reserved: boolean;

  *
   * Takes object as VehicleTypeSchema and creates Vehicle Class
  
  constructor(vehicleData: VehicleSchema) {
    this.id = vehicleData.id;
    this.createdAt = vehicleData.createdAt;
    this.fuelPercentage = vehicleData.fuelPercentage;
    this.type = vehicleData.type;
    this.numberPlate = vehicleData.numberPlate;
    this.state = vehicleData.state;
    this.reserved = vehicleData.reserved;
  }

  toPlainObject(): VehicleSchema {
    return {
      id: this.id,
      createdAt: this.createdAt,
      fuelPercentage: this.fuelPercentage,
      type: this.type,
      numberPlate: this.numberPlate,
      state: this.state,
      reserved: this.reserved,
    };
  }
} */
