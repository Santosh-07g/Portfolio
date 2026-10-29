import React from 'react'
import ScrambleText from './ScrambleText'

// "01 // about" label in mono, then the title with its accent word.
const SectionHeading = ({ index, label, plain, accent }) => (
  <div className="text-center mb-4">
    <p className="font-mono text-sm text-purple mb-2">
      <ScrambleText text={`${index} // ${label}`} />
    </p>
    <h2 className="text-3xl font-bold">
      <ScrambleText text={plain} />{' '}
      <span className="text-purple">
        <ScrambleText text={accent} />
      </span>
    </h2>
  </div>
)

export default SectionHeading
