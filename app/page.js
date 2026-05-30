import ClientPage from './ClientPage'

export default function Home() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short', year: 'numeric', month: 'long', day: 'numeric',
  })
  const year = new Date().getFullYear()
  return <ClientPage today={today} year={year} />
}
