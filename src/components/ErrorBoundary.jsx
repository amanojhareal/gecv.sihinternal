import { Component } from "react";
import styles from "./ErrorBoundary.module.css";

/**
 * ErrorBoundary
 * Catches render/lifecycle errors in its child tree and shows a fallback
 * UI instead of a blank white screen. Must be a class component — React
 * only supports error boundaries via componentDidCatch / getDerivedStateFromError.
 *
 * Usage:
 *   <ErrorBoundary>
 *     <LandingPage />
 *   </ErrorBoundary>
 *
 * Wrap it around whole pages (in Layout.jsx) and/or around risky
 * third-party bits like GoogleFormEmbed's iframe.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Basic version — just log for now. Swap for real error reporting later.
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrapper} role="alert">
          <p className={styles.title}>Something went wrong.</p>
          <p className={styles.message}>
            This part of the page couldn&apos;t load. Please try again.
          </p>
          <button className={styles.retryButton} onClick={this.handleRetry}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
