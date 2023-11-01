/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Fill the fields in ComponentDto section if you want to stage exact components. If not filled, all the components in the specified operations or operation activity steps are automatically staged.
 */
export type ComponentDto =
  | {
      /**
       * The batch number of the staged material
       */
      batchNumber?: string;
      /**
       * The ISO unit of measure of the component. You can enter either the base unit of measure, or the alternate unit of measure of the material. When both 'isoUnitOfMeasure' and 'unitOfMeasure' are filled, the value of 'isoUnitOfMeasure' is selected and used.
       */
      isoUnitOfMeasure?: string;
      /**
       * The material of the component
       */
      material?: string;
      /**
       * The reservation item number of the component in respective bill of material. Fill either 'material' or 'reservationItemNumber' to specify the component you want to stage. If both properties are filled, then the value of 'reservationItemNumber' is selected and used.
       */
      reservationItemNumber?: string;
      /**
       * The planned delivery date time of the staging request
       * @example "2021-04-08T07:00:05.000Z"
       * Format: "date-time".
       */
      plannedDeliveryDateTime?: string;
      /**
       * The quantity that is requested for this component in the staging request. If not set, the quantity will be calculated automatically based on the quantity specified under 'OrderStagingRequest' or 'SfcStagingRequest'.
       */
      quantity?: number;
      /**
       * The commercial unit of measure of the component. You can enter either the base unit of measure, or the alternate unit of measure of the material. When both 'isoUnitOfMeasure' and 'unitOfMeasure' are filled, the value of 'isoUnitOfMeasure' is selected and used.
       */
      unitOfMeasure?: string;
    }
  | Record<string, any>;
