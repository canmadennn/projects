/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ClassificationAssignmentHeader } from './classification-assignment-header';
import type { ClassificationClass } from './classification-class';
/**
 * The classification response
 */
export type ClassificationResponse =
  | {
      /**
       * Classification assignment headers
       */
      classificationAssignmentHeaders?: ClassificationAssignmentHeader[];
      /**
       * Classification classes
       */
      classificationClasses?: ClassificationClass[];
    }
  | Record<string, any>;
