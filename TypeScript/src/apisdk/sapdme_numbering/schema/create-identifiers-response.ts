/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Pattern } from './pattern';
import type { Sequence } from './sequence';
import type { PropertyMatchers } from './property-matchers';
/**
 * The Create Identifiers response.
 */
export type CreateIdentifiersResponse =
  | {
      /**
       * Event Name for which create identifier has been performed.
       */
      eventName?: string;
      /**
       * Target business object for which create identifier has been performed. The value of the targetBusinessObject depends on the event name provided.
       *  Example: If the event name is SFC_RELEASE, then the value for targetBusinessObject is SFC.
       */
      targetBusinessObject?: string;
      pattern?: Pattern;
      sequence?: Sequence;
      /**
       * Extension for which create identifier has been performed.
       */
      extension?: string;
      /**
       * Identifiers.
       */
      identifiers?: string[];
      /**
       * Property matchers for which create identifier has been performed.
       *  The value of propertyMatchers depends on the values of name, value and priority fields in the response.
       */
      propertyMatchers?: PropertyMatchers[];
    }
  | Record<string, any>;
