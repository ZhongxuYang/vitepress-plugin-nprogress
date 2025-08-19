import nprogress from 'nprogress'
// import 'nprogress/nprogress.css'
import './nprogress.css'
import type {EnhanceAppContext} from 'vitepress'

const vitepressNprogress = (ctx: EnhanceAppContext) => {
  if (typeof window === 'undefined') return
  
  const {router} = ctx
  setTimeout(() => {
    nprogress.configure({ showSpinner: false })

    // Compatible with Vitepress v1.6.0+ 
    // https://github.com/vuejs/vitepress/blob/v1.6.0/src/client/app/router.ts
    const afterRouteChangeEventName = ('onAfterRouteChange' in router) ? 'onAfterRouteChange' : 'onAfterRouteChanged'

    const cacheBeforeRouteChange = router.onBeforeRouteChange
    const cacheAfterRouteChange = router[afterRouteChangeEventName]

    router.onBeforeRouteChange = (to) => {
      nprogress.start()
      cacheBeforeRouteChange?.(to)
    }
    router[afterRouteChangeEventName] = (to) => {
      nprogress.done()
      cacheAfterRouteChange?.(to)
    }
  })

  return nprogress
}

export default vitepressNprogress
