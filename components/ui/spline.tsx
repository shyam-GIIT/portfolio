'use client'

import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

function SplineErrorFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-neutral-900/50 rounded-lg">
      <p className="text-neutral-400 text-sm">3D scene unavailable</p>
    </div>
  )
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <ErrorBoundary FallbackComponent={SplineErrorFallback}>
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader"></span>
          </div>
        }
      >
        <Spline
          scene={scene}
          className={className}
        />
      </Suspense>
    </ErrorBoundary>
  )
}



