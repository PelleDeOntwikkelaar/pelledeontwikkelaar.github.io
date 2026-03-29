import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Uncaught error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center px-4 text-center">
          <div>
            <h1 className="text-primary mb-4 text-2xl">Er is iets misgegaan</h1>
            <p className="text-muted-foreground mb-6">
              Vernieuw de pagina om het opnieuw te proberen.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="text-primary underline"
            >
              Probeer opnieuw
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
