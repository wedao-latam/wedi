import type { Account, Profile, Session, User } from "next-auth"
import type { JWT } from "next-auth/jwt"


import { type Icons } from "@/components/shared/icons"

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

export interface NavItemFooter {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
  }[]
}

export interface SessionCallbackParams {
  session: Session
  token: JWT
  user: User
}

export interface JWTCallbackParams {
  token: JWT
  user?: User | undefined
  account?: Account | null | undefined
  profile?: Profile | undefined
  isNewUser?: boolean | undefined
}

export interface BlogPostParamsProps {
  params: {
    slug: string[]
  }
}

export interface PricingPlan {
  id: "basic" | "standard" | "premium"
  name: string
  description: string
  features: string[]
  limitations: string[]
  stripePriceId: string
  prices: {
    monthly: number
    yearly: number
  }
  stripeIds: {
    monthly?: string
    yearly?: string
  }
}

export interface UserSubscriptionPlan extends SubscriptionPlan {
  stripeSubscriptionId?: string | null
  stripeCurrentPeriodEnd?: string | null
  stripeCustomerId?: string | null
  stripePriceId: string | null
  isSubscribed: boolean
  isCanceled: boolean
  isActive: boolean
  isPaid: boolean
  interval: "month" | "year" | null
}

export interface FrequentlyAskedQuestion {
  question: string
  answer: string
}

export interface Feature {
  title: string
  description: string
  image: string
}

export interface Testimonial {
  title: string
  body: string
  name: string
  role: string
  avatar: string
}


export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};








export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mailSupport: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  title: string;
  description: string;
  benefits: string[];
  limitations: string[];
  prices: {
    monthly: number;
    yearly: number;
  };
  stripeIds: {
    monthly: string | null;
    yearly: string | null;
  };
};

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, "stripeCustomerId" | "stripeSubscriptionId" | "stripePriceId"> & {
    stripeCurrentPeriodEnd: number;
    isPaid: boolean;
    interval: "month" | "year" | null;
    isCanceled?: boolean;
  };

export type InfoList = {
  icon: keyof typeof Icons;
  title: string;
  description: string;
};

export type InfoLdg = {
  title: string;
  image: string;
  description: string;
  list: InfoList[];
}
