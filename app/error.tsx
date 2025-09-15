'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-md">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-destructive/10 animate-pulse">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
        </div>
        
        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Something went wrong!</h1>
          <p className="text-muted-foreground text-lg">
            An unexpected error occurred. Don't worry, it's probably temporary.
          </p>
          {error.digest && (
            <p className="text-sm text-muted-foreground font-mono bg-muted p-2 rounded">
              Error ID: {error.digest}
            </p>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
          <Button asChild variant="outline" className="flex items-center gap-2">
            <a href="/">
              <Home className="h-4 w-4" />
              Go Home
            </a>
          </Button>
        </div>
        
        {/* Additional Help */}
        <div className="pt-8 border-t text-sm text-muted-foreground">
          <p>
            If this problem persists, please{' '}
            <a href="/contact" className="text-primary hover:underline">
              contact me
            </a>{' '}
            with the error details.
          </p>
        </div>
      </div>
    </div>
  )
}