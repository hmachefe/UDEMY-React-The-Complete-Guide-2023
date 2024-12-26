'use client';

import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      message: "",
      fallback: props.fallback || "An error occurred!" // <-- Accept fallback from props
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error.message || "An error occurred."
    };
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <h2>An error occurred!</h2>
          <p>{this.state.message}</p>
          <p>{this.state.fallback}</p> {/* Render fallback */}
        </div>
      );
    }
    return this.props.children;
  }
}
