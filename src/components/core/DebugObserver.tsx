// https://recoiljs.org/docs/guides/dev-tools/
import { useEffect, VFC } from 'react'
import { useRecoilSnapshot } from 'recoil'

export const DebugObserver: VFC = () => {
  const snapshot = useRecoilSnapshot()
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node)?.contents)
    }
  }, [snapshot])

  return <></>
}
