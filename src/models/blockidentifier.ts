/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * The block_identifier uniquely identifies a block in a particular network.
 */
export type BlockIdentifier = {
  /**
   * This is also known as the block height.
   */
  index: number;
  /**
   * This should be normalized according to the case specified in the block_hash_case network options.
   */
  hash: string;
};

/** @internal */
export const BlockIdentifier$inboundSchema: z.ZodType<
  BlockIdentifier,
  z.ZodTypeDef,
  unknown
> = z.object({
  index: z.number().int(),
  hash: z.string(),
});

/** @internal */
export type BlockIdentifier$Outbound = {
  index: number;
  hash: string;
};

/** @internal */
export const BlockIdentifier$outboundSchema: z.ZodType<
  BlockIdentifier$Outbound,
  z.ZodTypeDef,
  BlockIdentifier
> = z.object({
  index: z.number().int(),
  hash: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BlockIdentifier$ {
  /** @deprecated use `BlockIdentifier$inboundSchema` instead. */
  export const inboundSchema = BlockIdentifier$inboundSchema;
  /** @deprecated use `BlockIdentifier$outboundSchema` instead. */
  export const outboundSchema = BlockIdentifier$outboundSchema;
  /** @deprecated use `BlockIdentifier$Outbound` instead. */
  export type Outbound = BlockIdentifier$Outbound;
}

export function blockIdentifierToJSON(
  blockIdentifier: BlockIdentifier,
): string {
  return JSON.stringify(BlockIdentifier$outboundSchema.parse(blockIdentifier));
}

export function blockIdentifierFromJSON(
  jsonString: string,
): SafeParseResult<BlockIdentifier, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BlockIdentifier$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BlockIdentifier' from JSON`,
  );
}
