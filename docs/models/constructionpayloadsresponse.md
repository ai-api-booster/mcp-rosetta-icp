# ConstructionPayloadsResponse

ConstructionTransactionResponse is returned by `/construction/payloads`. It contains an unsigned transaction blob (that is usually needed to construct the a network transaction from a collection of signatures) and an array of payloads that must be signed by the caller.

## Example Usage

```typescript
import { ConstructionPayloadsResponse } from "icpmcp-rosetta-api";

let value: ConstructionPayloadsResponse = {
  unsignedTransaction: "<value>",
  payloads: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `unsignedTransaction`                                  | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `payloads`                                             | [models.SigningPayload](../models/signingpayload.md)[] | :heavy_check_mark:                                     | N/A                                                    |