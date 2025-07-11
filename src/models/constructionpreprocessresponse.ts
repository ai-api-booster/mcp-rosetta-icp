/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  AccountIdentifier,
  AccountIdentifier$inboundSchema,
  AccountIdentifier$Outbound,
  AccountIdentifier$outboundSchema,
} from "./accountidentifier.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * The options that will be sent directly to `/construction/metadata` by the caller.
 */
export type ConstructionPreprocessResponseOptions = {};

/**
 * ConstructionPreprocessResponse contains `options` that will be sent unmodified to `/construction/metadata`. If it is not necessary to make a request to `/construction/metadata`, `options` should be omitted.  Some blockchains require the PublicKey of particular AccountIdentifiers to construct a valid transaction. To fetch these PublicKeys, populate `required_public_keys` with the AccountIdentifiers associated with the desired PublicKeys. If it is not necessary to retrieve any PublicKeys for construction, `required_public_keys` should be omitted.
 */
export type ConstructionPreprocessResponse = {
  /**
   * The options that will be sent directly to `/construction/metadata` by the caller.
   */
  options?: ConstructionPreprocessResponseOptions | undefined;
  requiredPublicKeys?: Array<AccountIdentifier> | undefined;
};

/** @internal */
export const ConstructionPreprocessResponseOptions$inboundSchema: z.ZodType<
  ConstructionPreprocessResponseOptions,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ConstructionPreprocessResponseOptions$Outbound = {};

/** @internal */
export const ConstructionPreprocessResponseOptions$outboundSchema: z.ZodType<
  ConstructionPreprocessResponseOptions$Outbound,
  z.ZodTypeDef,
  ConstructionPreprocessResponseOptions
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConstructionPreprocessResponseOptions$ {
  /** @deprecated use `ConstructionPreprocessResponseOptions$inboundSchema` instead. */
  export const inboundSchema =
    ConstructionPreprocessResponseOptions$inboundSchema;
  /** @deprecated use `ConstructionPreprocessResponseOptions$outboundSchema` instead. */
  export const outboundSchema =
    ConstructionPreprocessResponseOptions$outboundSchema;
  /** @deprecated use `ConstructionPreprocessResponseOptions$Outbound` instead. */
  export type Outbound = ConstructionPreprocessResponseOptions$Outbound;
}

export function constructionPreprocessResponseOptionsToJSON(
  constructionPreprocessResponseOptions: ConstructionPreprocessResponseOptions,
): string {
  return JSON.stringify(
    ConstructionPreprocessResponseOptions$outboundSchema.parse(
      constructionPreprocessResponseOptions,
    ),
  );
}

export function constructionPreprocessResponseOptionsFromJSON(
  jsonString: string,
): SafeParseResult<ConstructionPreprocessResponseOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ConstructionPreprocessResponseOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConstructionPreprocessResponseOptions' from JSON`,
  );
}

/** @internal */
export const ConstructionPreprocessResponse$inboundSchema: z.ZodType<
  ConstructionPreprocessResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  options: z.lazy(() => ConstructionPreprocessResponseOptions$inboundSchema)
    .optional(),
  required_public_keys: z.array(AccountIdentifier$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "required_public_keys": "requiredPublicKeys",
  });
});

/** @internal */
export type ConstructionPreprocessResponse$Outbound = {
  options?: ConstructionPreprocessResponseOptions$Outbound | undefined;
  required_public_keys?: Array<AccountIdentifier$Outbound> | undefined;
};

/** @internal */
export const ConstructionPreprocessResponse$outboundSchema: z.ZodType<
  ConstructionPreprocessResponse$Outbound,
  z.ZodTypeDef,
  ConstructionPreprocessResponse
> = z.object({
  options: z.lazy(() => ConstructionPreprocessResponseOptions$outboundSchema)
    .optional(),
  requiredPublicKeys: z.array(AccountIdentifier$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    requiredPublicKeys: "required_public_keys",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConstructionPreprocessResponse$ {
  /** @deprecated use `ConstructionPreprocessResponse$inboundSchema` instead. */
  export const inboundSchema = ConstructionPreprocessResponse$inboundSchema;
  /** @deprecated use `ConstructionPreprocessResponse$outboundSchema` instead. */
  export const outboundSchema = ConstructionPreprocessResponse$outboundSchema;
  /** @deprecated use `ConstructionPreprocessResponse$Outbound` instead. */
  export type Outbound = ConstructionPreprocessResponse$Outbound;
}

export function constructionPreprocessResponseToJSON(
  constructionPreprocessResponse: ConstructionPreprocessResponse,
): string {
  return JSON.stringify(
    ConstructionPreprocessResponse$outboundSchema.parse(
      constructionPreprocessResponse,
    ),
  );
}

export function constructionPreprocessResponseFromJSON(
  jsonString: string,
): SafeParseResult<ConstructionPreprocessResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConstructionPreprocessResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConstructionPreprocessResponse' from JSON`,
  );
}
