/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { PropertyMatchers } from './property-matchers';
/**
 * The Create Identifiers response.
 */
export type IdentifierConfigurationResponse =
  | {
      /**
       * Plant where create identifier has to be performed.
       */
      plant?: string;
      /**
       * A unique ID is associated for each identifier configuration.
       */
      id?: string;
      /**
       * The version of the material that you want to associate with the numbering pattern.
       */
      version?: number;
      /**
       * The material that you want to associate with the numbering pattern.
       */
      materialContext?: string;
      /**
       * The material group that you want to associate with the numbering pattern.
       */
      materialGroup?: string;
      /**
       * Property matchers for which create identifier has been performed.
       */
      propertyMatchers?: PropertyMatchers[];
      /**
       * To define a numbering pattern types like SFC Release, SFC Serialize etc.
       */
      nextNumberType?: string;
      /**
       * The prefix of the numbering pattern.
       */
      prefix?: string;
      /**
       * The suffix of the numbering pattern.
       */
      suffix?: string;
      /**
       * The number base of the sequence portion of the numbering pattern.
       */
      sequenceBase?: number;
      /**
       * The number of characters for the sequence portion of the numbering pattern.
       */
      sequenceLength?: number;
      /**
       * The upper limit for the sequence portion of the numbering pattern.
       */
      maxSequence?: string;
      /**
       * The lower limit for the sequence portion of the numbering pattern.
       */
      minSequence?: string;
      /**
       * The value by which you want to increment the current sequence number after a new number is generated.
       */
      increment?: string;
      /**
       * The next number of the sequence portion of the numbering pattern.
       */
      currentSequence?: string;
      /**
       * Source System.
       */
      sourceSystem?: string;
      /**
       * Extension is used to generate identifiers for the different numbering events.
       */
      extension?: string;
      /**
       * Displays a sample of the next number pattern based on the entered and saved values.
       */
      sample?: string;
    }
  | Record<string, any>;
