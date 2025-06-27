# NetworkOptionsResponse

NetworkOptionsResponse contains information about the versioning of the node and the allowed operation statuses, operation types, and errors.

## Example Usage

```typescript
import { NetworkOptionsResponse } from "icpmcp";

let value: NetworkOptionsResponse = {
  version: {
    rosettaVersion: "1.2.5",
    nodeVersion: "1.0.2",
    middlewareVersion: "0.2.7",
  },
  allow: {
    operationStatuses: [
      {
        status: "SUCCESS",
        successful: true,
      },
    ],
    operationTypes: [
      "TRANSFER",
    ],
    errors: [],
    historicalBalanceLookup: false,
    callMethods: [
      "eth_call",
    ],
    balanceExemptions: [
      {
        subAccountAddress: "staking",
        currency: {
          symbol: "BTC",
          decimals: 8,
          metadata: {},
        },
      },
    ],
    mempoolCoins: true,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                                                                                                                                                                                                                                                            | [models.Version](../models/version.md)                                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                   | The Version object is utilized to inform the client of the versions of different components of the Rosetta implementation.                                                                                                                                                                                                                           |
| `allow`                                                                                                                                                                                                                                                                                                                                              | [models.Allow](../models/allow.md)                                                                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                   | Allow specifies supported Operation status, Operation types, and all possible error statuses. This Allow object is used by clients to validate the correctness of a Rosetta Server implementation. It is expected that these clients will error if they receive some response that contains any of the above information that is not specified here. |