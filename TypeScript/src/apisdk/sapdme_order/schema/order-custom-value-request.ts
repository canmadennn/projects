/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CustomValue } from './custom-value';
/**
 * This object represents the OrderCustomValueRequest.
 */
export type OrderCustomValueRequest =
  | {
      /**
       * Plant
       */
      plant: string;
      /**
       * Order
       */
      order: string;
      customValues: CustomValue[];
    }
  | Record<string, any>;
