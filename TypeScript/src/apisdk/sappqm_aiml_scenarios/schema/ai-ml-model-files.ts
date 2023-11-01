/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Model framework and files
 */
export type AiMlModelFiles =
  | {
      /**
       * List of files uploaded for the model
       */
      modelFiles?: string[];
      /**
       * Framework in which the model is trained
       */
      modelFramework?: string;
      /**
       * Framework version in which the model is trained
       */
      modelFrameworkVersion?: string;
    }
  | Record<string, any>;
