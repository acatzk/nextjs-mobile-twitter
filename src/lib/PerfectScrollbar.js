import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function PerfectScroll ({ chilren}) {
  return (
    <PerfectScrollbar>
      { chilren }
    </PerfectScrollbar>
  )
}