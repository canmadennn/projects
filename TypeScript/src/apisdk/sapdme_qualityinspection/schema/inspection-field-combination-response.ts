/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InspectionPointCombinationUserFieldResponse } from './inspection-point-combination-user-field-response';
/**
 * This object represents a response to reading an inspection point field combination.
 */
export type InspectionFieldCombinationResponse =
  | {
      /**
       * The list of activated combination user fields
       */
      activatedCombinationUserFields?: InspectionPointCombinationUserFieldResponse[];
      /**
       * The inspection point field combination ID
       */
      combinationId?: string;
      /**
       * The selected set from the usage decision catalog (catalog type 3) used for valuating inspection points
       */
      selectedCodeSet?: string;
      /**
       * The plant of the selected set used for valuating inspection point
       */
      selectedCodeSetPlant?: string;
      /**
       * The accept code used for valuating inspection points
       */
      valuationAcceptCode?: string;
      /**
       * The accept code group used for valuating inspection points
       */
      valuationAcceptCodeGroup?: string;
      /**
       * The reject code used for valuating inspection points
       */
      valuationRejectCode?: string;
      /**
       * The reject code group used for valuating inspection points
       */
      valuationRejectCodeGroup?: string;
    }
  | Record<string, any>;
