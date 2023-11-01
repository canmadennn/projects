/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ValidationResultResponse' schema.
 */
export type ValidationResultResponse =
  | {
      /**
       * The validation result of the loaded tools. 1. PRT_PASSED: Tool validation passed. All loaded tools align with planned PRT; 2. FAILED: Tool validation failed. There are loaded tools that do not align with planned PRT.
       */
      validationResult?: 'PRT_PASSED' | 'FAILED';
    }
  | Record<string, any>;
