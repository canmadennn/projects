/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Bom } from './bom';
import type { CustomValue } from './custom-value';
import type { UnitOfMeasureDto } from './unit-of-measure-dto';
import type { Material } from './material';
import type { Routing } from './routing';
import type { OrderSchedule } from './order-schedule';
import type { ShopOrderWorkCenter } from './shop-order-work-center';
/**
 * This object represents the found orders.
 */
export type FindOrderResponse =
  | {
      /**
       * The batch number of the found order
       */
      batchNumber?: string;
      bom?: Bom;
      /**
       * The build quantity of the found order
       */
      buildQuantity?: number;
      /**
       * The delivery undertolerance of the found order
       */
      toleranceUnder?: number;
      /**
       * The minimum delivery quantity of the found order
       */
      minDeliveryQuantity?: number;
      /**
       * The delivery overtolerance of the found order
       */
      toleranceOver?: number;
      /**
       * The maximum delivery quantity of the found order
       */
      maxDeliveryQuantity?: number;
      customValues?: CustomValue[];
      /**
       * The customer associated to the found order
       */
      customer?: string;
      /**
       * The customer order associated to the found order
       */
      customerOrder?: string;
      /**
       * The done quantity of the found order
       */
      doneQuantity?: number;
      /**
       * The done quantity of the found order in the production uom
       */
      doneQuantityInProductionUom?: number;
      /**
       * The total header material good receipt quantity of the found order
       */
      goodsReceiptQuantity?: number;
      /**
       * The total header material good receipt quantity of the found order in the production uom
       */
      goodsReceiptQuantityInProductionUom?: number;
      /**
       * The ERP unit of measure of the found order
       */
      erpUnitOfMeasure?: string;
      baseUnitOfMeasureObject?: UnitOfMeasureDto;
      material?: Material;
      /**
       * The found order
       */
      order?: string;
      /**
       * The order type of the found order
       */
      orderType?: string;
      /**
       * The ordered quantity of the found order
       */
      orderedQuantity?: number;
      /**
       * The planned completion date/time of the found order
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      plannedCompletionDate?: string;
      /**
       * The planned start date/time of the found order
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      plannedStartDate?: string;
      /**
       * Plant
       */
      plant?: string;
      /**
       * The priority of the found order
       */
      priority?: number;
      /**
       * The production quantity of the found order
       */
      productionQuantity?: number;
      /**
       * The production unit of measure of the found order
       */
      productionUnitOfMeasure?: string;
      productionUnitOfMeasureObject?: UnitOfMeasureDto;
      /**
       * The released quantity of the found order
       */
      releasedQuantity?: number;
      routing?: Routing;
      /**
       * The scheduled completion date/time of the found order
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      scheduledCompletionDate?: string;
      /**
       * The actual start date/time of the found order
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      actualStartDate?: string;
      /**
       * The actual completion date/time of the found order
       * @example "2022-04-23T09:53:31.000Z"
       * Format: "date-time".
       */
      actualCompletionDate?: string;
      /**
       * The scheduled start date/time of the found order
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      scheduledStartDate?: string;
      schedules?: OrderSchedule[];
      workCenters?: ShopOrderWorkCenter[];
      /**
       * The SFCs released from the found order
       */
      sfcs?: string[];
      /**
       * The status of the retrieved order
       */
      status?: 'RELEASABLE' | 'HOLD' | 'DONE' | 'CLOSED' | 'DISCARDED';
      /**
       * The release status of the retrieved order
       */
      releaseStatus?:
        | 'PARTIALLY_CREATED'
        | 'RELEASABLE'
        | 'PARTIALLY_RELEASED'
        | 'RELEASED'
        | 'HOLD'
        | 'NOT_RELEASABLE';
      /**
       * The execution status of the retrieved order
       */
      executionStatus?:
        | 'NOT_IN_EXECUTION'
        | 'ACTIVE'
        | 'HOLD'
        | 'CLOSED'
        | 'COMPLETED'
        | 'DISCARDED';
      /**
       * The inspection lot associated to the retrieved order
       */
      inspectionLot?: string;
      /**
       * The header text of the found order.
       */
      headerText?: string;
    }
  | Record<string, any>;
