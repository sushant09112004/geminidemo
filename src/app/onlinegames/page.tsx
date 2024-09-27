import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div>
        <h1>Page 2</h1>
        <p>This is the second page.</p>
      <p>Click <a href="/">here</a> to go back to the home page.</p>
      <Link href="http://localhost:3001/" target="_blank" rel="noopener noreferrer">
  Open in new tab
</Link>
    </div>
  )
}

export default page