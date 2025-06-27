# BlockIdentifier

The block_identifier uniquely identifies a block in a particular network.

## Example Usage

```typescript
import { BlockIdentifier } from "icpmcp";

let value: BlockIdentifier = {
  index: 1123941,
  hash: "0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `index`                                                                                           | *number*                                                                                          | :heavy_check_mark:                                                                                | This is also known as the block height.                                                           | 1123941                                                                                           |
| `hash`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | This should be normalized according to the case specified in the block_hash_case network options. | 0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85                                |