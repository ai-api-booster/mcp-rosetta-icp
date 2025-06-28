# ConstructionCombineRequest

ConstructionCombineRequest is the input to the `/construction/combine` endpoint. It contains the unsigned transaction blob returned by `/construction/payloads` and all required signatures to create a network transaction.

## Example Usage

```typescript
import { ConstructionCombineRequest } from "icpmcp-rosetta-api";

let value: ConstructionCombineRequest = {
  networkIdentifier: {
    blockchain: "bitcoin",
    network: "mainnet",
    subNetworkIdentifier: {
      network: "shard 1",
      metadata: {},
    },
  },
  unsignedTransaction: "<value>",
  signatures: [
    {
      signingPayload: {
        accountIdentifier: {
          address: "0x3a065000ab4183c6bf581dc1e55a605455fc6d61",
          subAccount: {
            address: "0x6b175474e89094c44da98b954eedeac495271d0f",
          },
        },
        hexBytes: "<value>",
      },
      publicKey: {
        hexBytes: "<value>",
        curveType: "pallas",
      },
      signatureType: "schnorr_poseidon",
      hexBytes: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `networkIdentifier`                                                                    | [models.NetworkIdentifier](../models/networkidentifier.md)                             | :heavy_check_mark:                                                                     | The network_identifier specifies which network a particular object is associated with. |
| `unsignedTransaction`                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `signatures`                                                                           | [models.Signature](../models/signature.md)[]                                           | :heavy_check_mark:                                                                     | N/A                                                                                    |