# PartialBlockIdentifier

When fetching data by BlockIdentifier, it may be possible to only specify the index or hash. If neither property is specified, it is assumed that the client is making a request at the current block.

## Example Usage

```typescript
import { PartialBlockIdentifier } from "icpmcp";

let value: PartialBlockIdentifier = {
  index: 1123941,
  hash: "0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `index`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | 1123941                                                            |
| `hash`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | 0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85 |