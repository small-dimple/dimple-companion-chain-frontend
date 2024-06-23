import 'vue-router'

/**
* 解决vue-router类型问题
*/
// RouteLocationNormalizedLoaded 是route的类型，扩展route.query的类型为Record<string, string>可以应对大多数场景。
declare module 'vue-router' {
interface RouteLocationNormalizedLoaded {
query: Record<string, string>
}
}