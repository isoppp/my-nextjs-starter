import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const AppProviders: FC<Props> = ({ children }) => <>{children}</>
