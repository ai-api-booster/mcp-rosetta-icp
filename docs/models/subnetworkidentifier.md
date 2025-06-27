# SubNetworkIdentifier

In blockchains with sharded state, the SubNetworkIdentifier is required to query some object on a specific shard. This identifier is optional for all non-sharded blockchains.

## Example Usage

```typescript
import { SubNetworkIdentifier } from "icpmcp";

let value: SubNetworkIdentifier = {
  network: "shard 1",
  metadata: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `network`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | shard 1                                                                          |
| `metadata`                                                                       | [models.SubNetworkIdentifierMetadata](../models/subnetworkidentifiermetadata.md) | :heavy_minus_sign:                                                               | N/A                                                                              | {<br/>"producer": "0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5"<br/>}             |