# ConstructionCombineResponse

ConstructionCombineResponse is returned by `/construction/combine`. The network payload will be sent directly to the `construction/submit` endpoint.

## Example Usage

```typescript
import { ConstructionCombineResponse } from "icpmcp";

let value: ConstructionCombineResponse = {
  signedTransaction: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `signedTransaction` | *string*            | :heavy_check_mark:  | N/A                 |