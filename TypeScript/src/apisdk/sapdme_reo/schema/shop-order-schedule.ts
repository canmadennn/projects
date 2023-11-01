/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ShopOrderSchedule' schema.
 */
export type ShopOrderSchedule =
  | {
      /**
       * Specifies the confirmed quantity.
       */
      confirmedQuantity?: string;
      /**
       * Specifies the created date and time. Format(YYYY-MM-DDThh:mm:ssZ).
       */
      createdDateTime?: string;
      /**
       * Specifies the customer.
       */
      customer?: string;
      /**
       * Specifies the customer order.
       */
      customerOrder?: string;
      /**
       * Specifies whether to include dispatched orders.
       */
      dispatched?: boolean;
      /**
       * Specifies the earliest processing start date and time. Format(YYYY-MM-DDThh:mm:ssZ).
       */
      earliestProcessingStartDateTime?: string;
      /**
       * Specifies the earliest setup start date and time. Format(YYYY-MM-DDThh:mm:ssZ).
       */
      earliestSetupStartDateTime?: string;
      /**
       * Specifies the earliest teardown end date and time. Format(YYYY-MM-DDThh:mm:ssZ).
       */
      earliestTeardownEndDateTime?: string;
      /**
       * Specifies the earliest teardown start date and time. Format(YYYY-MM-DDThh:mm:ssZ).
       */
      earliestTeardownStartDateTime?: string;
      /**
       * Specifies the end date and time. Format(YYYY-MM-DDThh:mm:ssZ).
       */
      endDateTime?: string;
      /**
       * Specifies the ERP order.
       */
      erpOrder?: string;
      /**
       * Specifies whether to include fix indicator.
       */
      fixIndicator?: boolean;
      /**
       * Specifies whether to include shift breaks.
       */
      includeShiftBreaks?: boolean;
      /**
       * Specifies the material.
       */
      item?: string;
      /**
       * Specifies the material group.
       */
      itemGroup?: string;
      /**
       * Specifies the latest processing start date and time. Format(YYYY-MM-DDThh:mm:ssZ).
       */
      latestProcessingStartDateTime?: string;
      /**
       * Specifies the latest setup start date and time. Format(YYYY-MM-DDThh:mm:ssZ).
       */
      latestSetupStartDateTime?: string;
      /**
       * Specifies the latest teardown end date and time. Format(YYYY-MM-DDThh:mm:ssZ).
       */
      latestTeardownEndDateTime?: string;
      /**
       * Specifies the latest teardown start date and time. Format(YYYY-MM-DDThh:mm:ssZ).
       */
      latestTeardownStartDateTime?: string;
      /**
       * Specifies the modified date and time. Format(YYYY-MM-DDThh:mm:ssZ).
       */
      modifiedDateTime?: string;
      /**
       * Specifies the operation split Id.
       * Format: "int32".
       */
      opSplitId?: number;
      /**
       * Specifies the operation.
       */
      operation?: string;
      /**
       * Specifies the order planned complete date. Format(YYYY-MM-DD).
       */
      orderPlannedCompDate?: string;
      /**
       * Specifies the order planned complete time. Format(hh:mm:ss).
       */
      orderPlannedCompTime?: string;
      /**
       * Specifies the order planned start date. Format(YYYY-MM-DD).
       */
      orderPlannedStartDate?: string;
      /**
       * Specifies the order planned start time. Format(hh:mm:ss).
       */
      orderPlannedStartTime?: string;
      /**
       * Specifies the order scheduled start date. Format(YYYY-MM-DD).
       */
      orderScheduledStartDate?: string;
      /**
       * Specifies the order scheduled start time. Format(hh:mm:ss).
       */
      orderScheduledStartTime?: string;
      /**
       * Specifies the plan processing time.
       */
      planProcessingTime?: string;
      /**
       * Specifies the plan setup time.
       */
      planSetupTime?: string;
      /**
       * Specifies the plan teardown time.
       */
      planTearDownTime?: string;
      /**
       * Specifies the plant Id.
       */
      plantId?: string;
      /**
       * Specifies the priority.
       */
      priority?: string;
      /**
       * Specifies the processing time UOM.
       */
      processingTimeUom?: string;
      /**
       * Specifies the quantity released.
       */
      quantityReleased?: string;
      /**
       * Specifies the quantity to build.
       * Format: "int32".
       */
      quantityToBuild?: number;
      /**
       * Specifies the released date and time. Format(YYYY-MM-DDThh:mm:ssZ).
       */
      releasedDateTime?: string;
      /**
       * Specifies the resource Id.
       */
      resourceRefId?: string;
      /**
       * Specifies the resource type.
       */
      resourceType?: string;
      /**
       * Specifies the router.
       */
      routerBO?: string;
      /**
       * Specifies the sequence.
       */
      sequence?: string;
      /**
       * Specifies the setup time UOM.
       */
      setupTimeUom?: string;
      /**
       * Specifies the shop order.
       */
      shopOrder?: string;
      /**
       * Specifies the split quantity.
       * Format: "int32".
       */
      splitQuantity?: number;
      /**
       * Specifies the start date and time. Format(YYYY-MM-DDThh:mm:ssZ).
       */
      startDateTime?: string;
      /**
       * Specifies the teardown time UOM.
       */
      tearDownTimeUom?: string;
      /**
       * Specifies the unit of measure.
       */
      unitOfMeasure?: string;
    }
  | Record<string, any>;
