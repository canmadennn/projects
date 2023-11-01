/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { RoutingId } from './routing-id';
import type { BomId } from './bom-id';
/**
 * Request object to change production.
 */
export type ChangeProductionRequest =
  | {
      /**
       * The plant of the Shop Floor Control.
       */
      plant: string;
      /**
       * The list of Shop Floor Controls you want to make changes to.
       */
      sfcs: string[];
      routing?: RoutingId;
      /**
       * Specify a particular routing step ID of the new routing. It determines from which routing step the SFC should be started. Based on the original status of the Shop Floor Control (SFC), the SFC will be automatically switched to In Queue or Active status at the routing step. If the property is not set, and the original status of the SFC is New or in Queue, it will be set to In Queue at the first step of the new routing; If the original status of the SFC is Active, it will be set to Active at the first same operation of the new routing.
       */
      routingStepId?: string;
      bom?: BomId;
      /**
       * The new resource to be assigned to the Shop Floor Control (SFC). The property only takes effect when specified SFC is in Active status. After production change, the SFC is only visible on the specified resource of the current step.
       */
      resource?: string;
      /**
       * The new operator who executes the Shop Floor Control (SFC). The property only takes effect when the specified SFC is in Active status. After production change, only this operator could execute the SFC from its current operation. The specified operator must have certification on the material, resource and operation.
       */
      operatorID?: string;
    }
  | Record<string, any>;
