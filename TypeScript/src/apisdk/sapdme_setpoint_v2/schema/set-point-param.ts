/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * This object represents the Setpoint Group parameter/indicator.
 */
export type SetPointParam =
  | {
      /**
       * The value of the Setpoint Group parameter if the data type is Boolean.
       */
      booleanValue?: boolean;
      /**
       * The data type of the Setpoint Group parameter.
       */
      dataType: 'NUMERIC' | 'STRING' | 'BOOLEAN';
      /**
       * The description of the Setpoint Group parameter.
       */
      description?: string;
      /**
       * The asset that the Setpoint Group parameter/indicator is defined on and belongs to.
       */
      asset?: string;
      /**
       * The ID of the indicator that this Setpoint Group parameter/indicator is associated with.
       */
      eabmIndicator?: string;
      /**
       * Generated ID for the root structure and asset type.
       */
      structureToAssetTypePathId?: string;
      /**
       * Generated ID for the indicator structure.
       */
      namedAssociationPathId?: string;
      /**
       * The lower limit of the Setpoint Group parameter/indicator if the data type is Numeric.
       */
      lowerLimitValue?: number;
      /**
       * The value of the Setpoint Group parameter/indicator if the data type is Numeric.
       */
      numericValue?: number;
      /**
       * The name of the Setpoint Group parameter/indicator.
       */
      parameter: string;
      /**
       * The resource that the Setpoint parameter/indicator is defined on and belongs to.
       */
      resource: string;
      /**
       * The value of the Setpoint Group parameter if the data type is String.
       */
      stringValue?: string;
      /**
       * The upper limit of the Setpoint Group parameter/indicator if the data type is Numeric.
       */
      upperLimitValue?: number;
    }
  | Record<string, any>;
