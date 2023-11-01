/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Bom } from './bom';
import type { CustomValue } from './custom-value';
import type { Material } from './material';
import type { SfcDetails } from './sfc-details';
/**
 * The object representing the shop orders work list response.
 */
export type WorkListResponse =
  | {
      /**
       * The batch number for this order.
       */
      batchNumber?: string;
      bom?: Bom;
      /**
       * The order quantity to build.
       */
      buildQuantity?: number;
      /**
       * The list of custom data for the order in attribute-value pairs.
       */
      customValues?: CustomValue[];
      /**
       * The customer associated with the order.
       */
      customer?: string;
      /**
       * The customer order associated with this order.
       */
      customerOrder?: string;
      /**
       * The order quantity that has been done.
       */
      doneQuantity?: number;
      /**
       * The ERP order of this order.
       */
      erpOrder?: string;
      /**
       * The ERP production version of this order.
       */
      erpProductionVersion?: string;
      /**
       * The put away store location for this order.
       */
      erpPutAwayStoreLoc?: string;
      /**
       * The ERP unit of measure on this order.
       */
      erpUnitOfMeasure?: string;
      material?: Material;
      /**
       * The name of the shop order relevant to this work list material.
       */
      order?: string;
      /**
       * The actual complete date and time of the shop order of this work list material.
       */
      orderActualCompleteDateTime?: string;
      /**
       * The actual start date and time of the shop order of this work list material.
       */
      orderActualStartDateTime?: string;
      /**
       * The planned complete date and time of the shop order of this work list material.
       */
      orderPlannedCompleteDateTime?: string;
      /**
       * The planned start date and time of the shop order of this work list material.
       */
      orderPlannedStartDateTime?: string;
      /**
       * The released date and time of the shop order of this work list material.
       */
      orderReleasedDateTime?: string;
      /**
       * The scheduled complete date and time of the shop order of this work list material.
       */
      orderScheduledCompleteDateTime?: string;
      /**
       * The scheduled start date and time of the shop order of this work list material.
       */
      orderScheduledStartDateTime?: string;
      /**
       * The list of SFCs belonging to this shop order.
       */
      orderSfcs?: SfcDetails[];
      /**
       * The order status.
       */
      orderStatus?: string;
      /**
       * The order quantity that has been ordered.
       */
      orderedQuantity?: number;
      /**
       * The order priority.
       */
      priority?: number;
      /**
       * The cumulative quantity of SFCs on this order that completed their operations but are in a complete pending status.
       */
      quantityCompletePending?: number;
      /**
       * The cumulative quantity in queue on this order.
       */
      quantityInQueue?: number;
      /**
       * The cumulative quantity in work on this order.
       */
      quantityInWork?: number;
      /**
       * The cumulative quantity rejected on this order.
       */
      quantityRejected?: number;
      /**
       * The order quantity that has been released.
       */
      releasedQuantity?: number;
      /**
       * The name of the resource scheduled for this order when released.
       */
      scheduledResource?: string;
      /**
       * The order quantity that has been scrapped.
       */
      scrappedQuantity?: number;
      /**
       * The type of the shop order relevant to this work list material.
       */
      type?: string;
    }
  | Record<string, any>;
