/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ControlKeyId } from './control-key-id';
import type { RoutingStepComponent } from './routing-step-component';
import type { RecipeLink } from './recipe-link';
import type { RecipeOperationPhase } from './recipe-operation-phase';
import type { RecipeReturnPhase } from './recipe-return-phase';
import type { RecipeScrapStep } from './recipe-scrap-step';
/**
 * Representation of the 'RecipePhase' schema.
 */
export type RecipePhase =
  | {
      controlKey?: ControlKeyId;
      /**
       * The description of the recipe phase.
       */
      description?: string;
      /**
       * The routing done step.
       */
      donePhaseId?: string;
      /**
       * If true, this is an entry recipe phase.
       */
      entry?: boolean;
      /**
       * The recipe hold phase.
       */
      holdPhaseId?: string;
      /**
       * Indicates if it is the last reporting step.
       */
      lastReportingPhase?: boolean;
      /**
       * The list of next possible recipe phases.
       */
      nextPhaseList?: string[];
      /**
       * This determines the operator who decides where an SFC should be placed in queue when completing this phase.
       */
      queueDecisionType?: 'COMPLETING_OPERATOR' | 'NEXT_OPERATOR';
      /**
       * The list of components to be assembled at the phase.
       */
      recipePhaseComponentList?: RoutingStepComponent[];
      /**
       * Indicates if this phase is considered as rework.
       */
      rework?: boolean;
      /**
       * The step ID of the recipe phase.
       */
      phaseId?: string;
      recipeLink?: RecipeLink;
      recipeOperation?: RecipeOperationPhase;
      /**
       * The recipe return phase.
       */
      returnPhaseId?: string;
      recipeReturnPhase?: RecipeReturnPhase;
      /**
       * The recipe scrap phase.
       */
      scrapPhaseId?: string;
      recipeScrapPhase?: RecipeScrapStep;
      /**
       * The work center for the recipe phase.
       */
      workCenter?: string;
      /**
       * Indicates how this step is known in the external system.
       */
      reportingStep?: string;
      /**
       * The ID of the production process.
       */
      productionProcessId?: string;
      /**
       * The Production Process Definition Key.
       */
      productionProcessDefKey?: string;
    }
  | Record<string, any>;
