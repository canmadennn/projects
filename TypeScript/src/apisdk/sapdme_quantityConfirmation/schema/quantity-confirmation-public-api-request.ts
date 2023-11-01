/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The object represents a request to post quantity confirmation.
 */
export type QuantityConfirmationPublicAPIRequest =
  | {
      /**
       * The plant where quantity confirmation is posted
       */
      plant: string;
      /**
       * The order that the quantity confirmation is posted against. It can be a production order or a process order.
       */
      shopOrder: string;
      /**
       * The SFC that the quantity confirmation is posted against
       */
      sfc: string;
      /**
       * The operation activity of the quantity confirmation
       */
      operationActivity: string;
      /**
       * The resource for which the quantity confirmation is posted
       */
      resource?: string;
      /**
       * The work center for which the quantity confirmation is posted
       */
      workCenter: string;
      /**
       * The quantity you want to yield for the SFC
       * Format: "double".
       */
      yieldQuantity?: number;
      /**
       * The base unit of measure for the yield quantity
       */
      yieldQuantityUnit?: string;
      /**
       * The ISO unit of measure for the yield quantity
       */
      yieldQuantityIsoUnit?: string;
      /**
       * The quantity you want to scrap for the SFC
       * Format: "double".
       */
      scrapQuantity?: number;
      /**
       * The base unit of measure for the scrap quantity
       */
      scrapQuantityUnit?: string;
      /**
       * The ISO unit of measure for the scrap quantity
       */
      scrapQuantityIsoUnit?: string;
      /**
       * The resource reason code key. A resource reason code may optionally be provided with the SFC scrap. The reason code will be used in reports and synchronized to the integrated ERP system.
       * Max Length: 38.
       * Min Length: 1.
       */
      reasonCodeKey?: string;
      /**
       * Specify the person who posted the quantity confirmation. It can be the user ID, user name or user email address, etc.
       */
      postedBy?: string;
      /**
       * The batch number that is used in the quantity confirmation
       */
      batchNumber?: string;
      /**
       * The storage location for the quantity confirmation
       */
      storageLocation?: string;
      /**
       * The posting date time (in UTC) when the quantity confirmation is performed.
       * @example "2021-04-08T07:00:05.000Z"
       * Format: "date-time".
       */
      postingDateTime?: string;
      /**
       * If set to true, it indicates that the current operation activity is confirmed, and no further quantity confirmation can be posted against it.
       */
      finalConfirmation?: boolean;
      /**
       * If set to true, it checks if current resource is OEE and scheduling relevant. If resource is not OEE and scheduling relevant the confirmation will be rejected.
       */
      checkSchedulingAndOeeRelevant?: boolean;
    }
  | Record<string, any>;
