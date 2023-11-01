/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Quantity } from './quantity';
/**
 * Line item of quantity confirmation details object
 */
export type Detail =
  | {
      yieldQuantity?: Quantity;
      scrapQuantity?: Quantity;
      /**
       * Reason code for scrap
       */
      reasonCode?: string;
      /**
       * Reason codes for scrap
       */
      reasonCodes?: string[];
      /**
       * Reason code description for scrap
       */
      description?: string;
      /**
       * Resource information of quantity confirmation
       */
      resource?: string;
      /**
       * User ID of the quantity confirmation
       */
      userId?: string;
      /**
       * Status of quantity confirmation
       */
      qtyConfirmationStatus?: string;
      /**
       * Date and time when the quantity confirmation was performed
       * @example "2022-07-08T07:00:05.000Z"
       * Format: "date-time".
       */
      dateTime?: string;
      /**
       * Date and time when the quantity confirmation was created
       * @example "2022-07-08T07:00:05.000Z"
       * Format: "date-time".
       */
      createdDateTime?: string;
      /**
       * Custom field data
       */
      customFieldData?: string;
    }
  | Record<string, any>;
