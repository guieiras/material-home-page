import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import clsx from 'clsx';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

type NextComposedProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & NextLinkProps;

const NextComposed = React.forwardRef<HTMLAnchorElement, NextComposedProps>(
  (props: React.PropsWithChildren<NextComposedProps>, ref) => {
    // eslint-disable-next-line react/prop-types
    const { as, href, replace, scroll, passHref, shallow, prefetch, ...other } = props;

    return (
      <NextLink
        href={href}
        prefetch={prefetch}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}
      >
        <a ref={ref} {...other} />
      </NextLink>
    );
  },
);
NextComposed.displayName = 'NextComposed';

interface LinkPropsBase {
  activeClassName?: string;
  innerRef?: React.Ref<HTMLAnchorElement>;
  naked?: boolean;
}

export type LinkProps = LinkPropsBase & NextComposedProps & Omit<MuiLinkProps, 'href'>;

function RouterLink(props: LinkProps) {
  const { href, activeClassName = 'active', className: classNameProps, innerRef, naked, ...other } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  if (naked) {
    return <NextComposed className={className} ref={innerRef} href={href} {...other} />;
  }

  return <MuiLink component={NextComposed} className={className} ref={innerRef} href={href as string} {...other} />;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => <RouterLink {...props} innerRef={ref} />);
Link.displayName = 'Link';

export default Link;
