/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ObjectsToMatch } from './objects-to-match';
/**
 * Request object to create identifiers.
 */
export type CreateIdentifiersRequest =
  | {
      /**
       * Plant where create identifier has to be performed.
       */
      plant: string;
      /**
       * Event Name for which create identifier has to be performed.
       *  Allowed values are:
       *  SFC_RELEASE, BATCH_NUMBER, SFC_SERIALIZE, INCIDENT_NUMBER, INVENTORY_RECEIPT, NC_ASSEMBLY_NUMBER, PACKING_UNIT_NUMBER, NC_BATCH_NUMBER,
       *  TOOL_NUMBER, CARRIER_NUMBER, LOGISTICS_ORDER_NUMBER and PROCESS_LOT_NUMBER
       */
      eventName: string;
      objectsToMatch: ObjectsToMatch;
    }
  | Record<string, any>;
