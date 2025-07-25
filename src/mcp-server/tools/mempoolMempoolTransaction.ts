/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { mempoolMempoolTransaction } from "../../funcs/mempoolMempoolTransaction.js";
import * as models from "../../models/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: models.MempoolTransactionRequest$inboundSchema,
};

export const tool$mempoolMempoolTransaction: ToolDefinition<typeof args> = {
  name: "mempool-mempool-transaction",
  description: `Get a Mempool Transaction

Get a transaction in the mempool by its Transaction Identifier. This is a separate request than fetching a block transaction (/block/transaction) because some blockchain nodes need to know that a transaction query is for something in the mempool instead of a transaction in a block. Transactions may not be fully parsable until they are in a block (ex: may not be possible to determine the fee to pay before a transaction is executed). On this endpoint, it is ok that returned transactions are only estimates of what may actually be included in a block.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await mempoolMempoolTransaction(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
