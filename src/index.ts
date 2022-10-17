import nprogress from 'nprogress'
// import 'nprogress/nprogress.css'
import './nprogress.css'
import type {EnhanceAppContext} from 'vitepress'

const vitepressNprogress = (ctx: EnhanceAppContext) => {
  if (typeof window === 'undefined') return
  
  const {router} = ctx
  setTimeout(() => {
    nprogress.configure({ showSpinner: false })

    const cacheBeforeRouteChange = router.onBeforeRouteChange
    const cacheAfterRouteChange = router.onAfterRouteChanged
    router.onBeforeRouteChange = (to) => {
      nprogress.start()
      cacheBeforeRouteChange?.(to)
    }
    router.onAfterRouteChanged = (to) => {
      nprogress.done()
      cacheAfterRouteChange?.(to)
    }
  })

  return nprogress
}

export default vitepressNprogress
