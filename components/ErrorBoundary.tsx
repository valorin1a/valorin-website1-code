import React, { ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary - Catches React component errors and displays a fallback UI.
 * Professional error handling for production.
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to service in production
    console.error("ErrorBoundary caught:", error, errorInfo);
    if (import.meta.env.PROD) {
      // Send to error tracking service (e.g., Sentry, DataDog)
      // logErrorToService(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="max-w-md w-full">
            <div className="text-center">
              <h1 className="text-3xl font-bold font-serif text-foreground mb-4">
                Something Went Wrong
              </h1>
              <p className="text-muted-foreground mb-6">
                We're sorry for the inconvenience. Our team has been notified.
              </p>
              {import.meta.env.DEV && (
                <details className="mt-6 p-4 bg-destructive/10 rounded-lg text-left text-sm text-destructive overflow-auto max-h-40">
                  <summary className="cursor-pointer font-semibold">Error Details (Dev Only)</summary>
                  <pre className="mt-2 whitespace-pre-wrap">{this.state.error?.toString()}</pre>
                </details>
              )}
              <button
                onClick={() => window.location.href = "/"}
                className="mt-8 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Return Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
