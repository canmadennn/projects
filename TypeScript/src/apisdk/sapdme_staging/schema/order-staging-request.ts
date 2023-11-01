/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { OperationDto } from './operation-dto';
import type { StepIdDto } from './step-id-dto';
/**
 * Representation of the 'OrderStagingRequest' schema.
 */
export type OrderStagingRequest =
  | {
      /**
       * The order number for which the staging request is performed
       */
      orderNumber: string;
      /**
       * The quantity of the order's finished goods. The component quantity that's actually staged is calculated based on the quantity value specified here. If not set, the order's build quantity is used by default.
       */
      quantity?: number;
      /**
       * The commercial unit of measure of the order's finished goods. You can enter either the base unit of measure, or the alternate unit of measure of the material. When both 'isoUnitOfMeasure' and 'unitOfMeasure' are filled, the value of 'isoUnitOfMeasure' is selected and used.
       */
      unitOfMeasure?: string;
      /**
       * The ISO unit of measure of the order's finished goods. You can enter either the base unit of measure, or the alternate unit of measure of the material. When both 'isoUnitOfMeasure' and 'unitOfMeasure' are filled, the value of 'isoUnitOfMeasure' is selected and used.
       */
      isoUnitOfMeasure?: string;
      /**
       * The operations for which the staging request is performed. If not set, the staging request is performed for all the operations of the order. When both 'operations' and 'stepIds' are filled, the value of 'operations' is selected and used.
       */
      operations?: OperationDto[];
      /**
       * The operation activity steps for which the staging request is performed. If not set, the staging request is performed for all the operation activity steps of the order. When both 'operations' and 'stepIds' are filled, the value of 'operations' is selected and used.
       */
      stepIds?: StepIdDto[];
    }
  | Record<string, any>;
