import { useNavigation } from "react-router";
import Loader from "../loader/loader";

type NavigationState = ReturnType<typeof useNavigation>["state"];

const NavigationStates: Record<NavigationState, NavigationState> = {
  idle: "idle",
  loading: "loading",
  submitting: "submitting",
};

export type ErrorFallbackProps = {
  error: string;
};

const ErrorFallback = (props: ErrorFallbackProps) => {
  const { error } = props;

  const navigation = useNavigation();

  if (navigation.state === NavigationStates.loading) {
    return <Loader />;
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-[50vh] p-6"
      data-testid="error-fallback"
    >
      <div className="relative">
        {/* Error icon */}
        <div className="w-24 h-24 mb-6 rounded-full flex items-center justify-center bg-[hsl(var(--destructive)/0.15)] mx-auto relative overflow-hidden">
          <span className="absolute inset-0 animate-pulse bg-[hsl(var(--destructive)/0.05)] rounded-full"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12 text-[hsl(var(--destructive-foreground))]"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-2 text-[hsl(var(--card-title))]">
        Oops! Something went wrong
      </h2>

      <div className="flex items-center justify-center p-3 my-4 rounded-lg bg-[hsl(var(--card)/0.6)] border border-[hsl(var(--border)/0.1)] w-full max-w-md">
        <p className="text-sm md:text-base text-[hsl(var(--neutral-100))] font-medium text-center">
          {error}
        </p>
      </div>

      <p className="text-sm md:text-base text-[hsl(var(--neutral-300))] text-center mb-6 max-w-md">
        We're working on fixing this issue. In the meantime, you can try
        refreshing the page or come back later.
      </p>
    </div>
  );
};

export default ErrorFallback;
