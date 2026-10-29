// onPointerMove handler: stores the cursor position (relative to the element)
// in --mx / --my so CSS can draw a glow that follows the mouse.
// Touch and pen are ignored, so phones never run this.
export const trackPointer = (e) => {
  if (e.pointerType !== 'mouse') return
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  el.style.setProperty('--my', `${e.clientY - rect.top}px`)
}
