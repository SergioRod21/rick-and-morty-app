import React from 'react'

function Footer() {
  return (
    <div>
    <div class="mt-8 border-t border-gray-100 pt-6">
      <p class="text-center text-xs leading-relaxed text-gray-500">
    Created with
        <a
        target={"_blank"}
          href="https://rickandmortyapi.com/"
          class="text-gray-700 underline transition hover:text-gray-700/75"> Rick and Morty API </a>
        by
        <a
        target={"_blank"}
          href="https://github.com/SergioRod21"
          class="text-gray-700 underline transition hover:text-gray-700/75"> SR </a>
      </p>
    </div>
    </div>
  )
}

export default Footer