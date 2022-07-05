import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from 'config/firebase'
import * as styles from './styles'

export default function HomePageContent() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

  console.log('Loading:', loading, '|', 'Current user:', user)
  return (
    <div css={styles.container}>
      <h1>hello</h1>
      <button onClick={() => signInWithGoogle()}>hello</button>
    </div>
  )
}
