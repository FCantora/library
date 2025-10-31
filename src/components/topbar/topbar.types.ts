export type TopbarLinkProps = {
  to: string;
  label: string;
};

export type TopbarProfileProps = {
  name: string;
  profilePic: string;
};

export type TopbarData = {
  profile: TopbarProfileProps;
  routes: TopbarLinkProps[];
  title?: string;
  notifications?: string[];
  onRouteClick?: (to: string) => void;
  onSignOut?: () => void;
  activeRoute?: string;
};
