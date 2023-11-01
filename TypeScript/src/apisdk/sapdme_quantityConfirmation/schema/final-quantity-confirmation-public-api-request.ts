/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The object represents a request to post final quantity confirmation without updating the quantity.
 */
export type FinalQuantityConfirmationPublicAPIRequest =
  | {
      /**
       * The plant where final quantity confirmation is posted
       */
      plant: string;
      /**
       * The order that the final quantity confirmation is posted against. It can be a production order or a process order.
       */
      shopOrder: string;
      /**
       * The SFC that the final quantity confirmation is posted against
       */
      sfc: string;
      /**
       * The operation activity of the final quantity confirmation. Only when the operation activity has a 'Completed' status in SAP Digital Manufacturing, will the API service work, and set the operation/phase status to 'CNF' in the integrated ERP system.
       */
      operationActivity: string;
    }
  | Record<string, any>;
