/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ReadLogisticsOrderInstance } from './read-logistics-order-instance';
/**
 * Response object of retrieving logistic orders.
 */
export type ReadLogisticsOrderResponse =
  | {
      /**
       * a list of logistics orders retrieved by ID
       */
      logisticsOrders?: ReadLogisticsOrderInstance[];
    }
  | Record<string, any>;
