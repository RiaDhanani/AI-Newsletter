import ClientPage from './ClientPage'

const today = new Date().toLocaleDateString('en-US', {
  weekday: 'short', year: 'numeric', month: 'long', day: 'numeric',
})

const year = new Date().getFullYear()

export default function Home() {
  return <ClientPage today={today} year={year} />
}
