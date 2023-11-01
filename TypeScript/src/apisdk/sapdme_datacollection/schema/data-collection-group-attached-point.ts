/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Material } from './material';
import type { Operation } from './operation';
import type { Routing } from './routing';
import type { RoutingStep } from './routing-step';
/**
 * Object represents Data Collection Attachment
 */
export type DataCollectionGroupAttachedPoint =
  | {
      material?: Material;
      operation?: Operation;
      /**
       * A resource attached point, if exists.
       */
      resource?: string;
      routing?: Routing;
      routingStep?: RoutingStep;
      /**
       * The attached point sequence.
       * Format: "int64".
       */
      sequence?: number;
      /**
       * A shoporder attached point, if exists.
       */
      shopOrder?: string;
      /**
       * A work center type attached point, if exists.
       */
      workCenter?: string;
    }
  | Record<string, any>;
