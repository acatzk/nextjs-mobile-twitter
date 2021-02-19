import NextLink from 'next/link'
import { useRouter } from 'next/router'

export function Link ({ href, activeClassName, inactiveClassName, className, children, ...rest }) {
  const router = useRouter()
  let currentClassName = className
  let isActive = router.pathname === href

  return (
    <NextLink href={href} {...rest}>
      <a className={currentClassName}>{ children({ isActive }) }</a>
    </NextLink  >
  )
}