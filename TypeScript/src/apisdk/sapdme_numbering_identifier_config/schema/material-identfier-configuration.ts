/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Pattern } from './pattern';
import type { Sequence } from './sequence';
import type { PropertyMatchers } from './property-matchers';
/**
 * Identifier Configuration
 */
export type MaterialIdentfierConfiguration =
  | {
      /**
       * A unique ID is associated for each identifier configuration.
       */
      id?: string;
      /**
       * Plant where create identifier has to be performed.
       */
      plant?: string;
      /**
       * Event types like SFC Release, SFC Serialize etc
       */
      eventName?: string;
      /**
       * targetBusinessObject
       */
      targetBusinessObject?: string;
      /**
       * sourceSystem
       */
      sourceSystem?: string;
      /**
       * Extension is used to generate identifiers for the different numbering events.
       */
      extension?: string;
      /**
       * The version of the material that you want to associate with the numbering pattern.
       */
      version?: number;
      pattern?: Pattern;
      sequence?: Sequence;
      /**
       * Property matchers for which create identifier has been performed.
       */
      identPropMatcher?: PropertyMatchers[];
    }
  | Record<string, any>;
