### lazy import

```
const ThreeDPreview = lazy(() => import('./ThreeDPreview'));

export function Product() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
      <ThreeDPreview />
      </Suspense>
    </ErrorBoundary>
  )
}
```