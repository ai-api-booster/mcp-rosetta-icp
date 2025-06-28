# SubAccountIdentifierMetadata

If the SubAccount address is not sufficient to uniquely specify a SubAccount, any other identifying information can be stored here. It is important to note that two SubAccounts with identical addresses but differing metadata will not be considered equal by clients.

## Example Usage

```typescript
import { SubAccountIdentifierMetadata } from "icpmcp-rosetta-api";

let value: SubAccountIdentifierMetadata = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |