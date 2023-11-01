/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Material } from './material';
/**
 * Request object to manage identifiers.
 */
export type CreateIdentifierConfigurationRequest =
  | {
      /**
       * Plant where create identifier configuration has to be performed.
       */
      plant: string;
      material?: Material;
      /**
       * The material group that you want to associate with the numbering pattern.
       */
      materialGroup?: string;
      /**
       * To define a numbering pattern types like SFC Release, SFC Serialize etc.
       */
      nextNumberType: string;
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
      sequenceBase: number;
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
      currentSequence: string;
      /**
       * Source System.
       */
      sourceSystem: string;
      /**
       * Extension is used to generate identifiers for the different numbering events.
       */
      extension?: string;
    }
  | Record<string, any>;
