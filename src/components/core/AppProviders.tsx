import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
const AppProviders: FC<Props> = ({ children }) => <>{children}</>

export default AppProviders
