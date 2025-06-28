# Call
(*call*)

## Overview

### Available Operations

* [call](#call) - Make a Network-Specific Procedure Call

## call

Call invokes an arbitrary, network-specific procedure call with network-specific parameters. The guidance for what this endpoint should or could do is purposely left vague. In Ethereum, this could be used to invoke `eth_call` to implement an entire Rosetta API interface for some smart contract that is not parsed by the implementation creator (like a DEX). This endpoint could also be used to provide access to data that does not map to any Rosetta models instead of requiring an integrator to use some network-specific SDK and call some network-specific endpoint (like surfacing staking parameters). Call is NOT a replacement for implementing Rosetta API endpoints or mapping network-specific data to Rosetta models. Rather, it enables developers to build additional Rosetta API interfaces for things they care about without introducing complexity into a base-level Rosetta implementation. Simply put, imagine that the average integrator will use layered Rosetta API implementations that each surfaces unique data.

### Example Usage

```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.call.call({
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    method: "eth_call",
    parameters: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IcpmcpCore } from "icpmcp/core.js";
import { callCall } from "icpmcp/funcs/callCall.js";

// Use `IcpmcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const icpmcp = new IcpmcpCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await callCall(icpmcp, {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    method: "eth_call",
    parameters: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("callCall failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CallRequest](../../models/callrequest.md)                                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CallResponse](../../models/callresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorT             | 500                       | application/json          |
| errors.IcpmcpDefaultError | 4XX, 5XX                  | \*/\*                     |