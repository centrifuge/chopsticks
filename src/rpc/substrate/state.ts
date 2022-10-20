import { Handlers, randomId } from '../shared'

const handlers: Handlers = {
  state_getRuntimeVersion: async (context) => {
    return context.chain.head.runtimeVersion
  },
  state_getMetadata: async (context) => {
    return context.chain.head.metadata
  },
  state_subscribeRuntimeVersion: async (context, _params, { subscribe }) => {
    const id = randomId()
    const callback = subscribe('state_runtimeVersion', id)
    // TODO: actually subscribe to runtime version
    context.chain.head.runtimeVersion.then(callback)
    return id
  },
  state_unsubscribeRuntimeVersion: async (_context, [subid], { unsubscribe }) => {
    unsubscribe(subid)
  },
}

export default handlers