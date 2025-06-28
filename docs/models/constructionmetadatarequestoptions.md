# ConstructionMetadataRequestOptions

Some blockchains require different metadata for different types of transaction construction (ex: delegation versus a transfer). Instead of requiring a blockchain node to return all possible types of metadata for construction (which may require multiple node fetches), the client can populate an options object to limit the metadata returned to only the subset required.

## Example Usage

```typescript
import { ConstructionMetadataRequestOptions } from "icpmcp-rosetta-api";

let value: ConstructionMetadataRequestOptions = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |